import bcrypt from "bcryptjs";
import { models, Schema, model, Document, Query } from "mongoose";

interface IUserDocument extends Document, Omit<IUser, "_id"> {
  isModified(path: string): boolean;
}

interface IUpdateQuery extends Query<any, any> {
  getUpdate(): Record<string, any> | null;
  setUpdate(update: Record<string, any>): void;
}

const UserSchema = new Schema<IUserDocument>(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    phone: {
      type: String,
      required: [true, "phone is required"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    addedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  { timestamps: true }
);

// Hash the password before saving it

async function hashPassword(
  this: IUserDocument | IUpdateQuery,
  next: (err?: any) => void
): Promise<void> {
  try {
    if (
      (this as IUserDocument).isModified &&
      (this as IUserDocument).isModified("password")
    ) {
      const userDoc = this as IUserDocument;
      if (!userDoc.password) return next();

      const salt = await bcrypt.genSalt(10);
      userDoc.password = await bcrypt.hash(userDoc.password, salt);
    } else if ((this as IUpdateQuery).getUpdate) {
      const queryContext = this as IUpdateQuery;
      const update = queryContext.getUpdate();

      if (update && typeof update === "object" && update.password) {
        const salt = await bcrypt.genSalt(10);
        update.password = await bcrypt.hash(update.password, salt);
        queryContext.setUpdate(update);
      }
    }
    next();
  } catch (error) {
    next(error);
  }
}

UserSchema.pre("save", hashPassword);
UserSchema.pre("findOneAndUpdate", hashPassword);
UserSchema.pre("updateOne", hashPassword);
UserSchema.pre("updateMany", hashPassword);

const User = models.User || model("User", UserSchema);

export default User;
