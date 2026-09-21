import { models, Schema, model } from "mongoose";

const ApplicantSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "fullName is required"],
    },
    phone: {
      type: String,
      required: [true, "phone is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    job: {
      type: Schema.Types.ObjectId,
      ref: "Job",
      required: [true, "Job id is required"],
    },
  },
  { timestamps: true }
);

const Applicant = models.Applicant || model("Applicant", ApplicantSchema);

export default Applicant;
