import { models, Schema, model } from "mongoose";

const JobSchema = new Schema(
  {
    position: {
      type: String,
      required: [true, "position is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    minimumExperience: {
      type: String,
      required: [true, "minimumExperience is required"],
    },
    jobType: {
      type: String,
      enum: {
        values: ["WFH", "WFO"],
        message: "Invalid job type",
      },
    },
    employmentType: {
      type: String,
      enum: {
        values: ["Part Time", "Permanent", "Contractual"],
        message: "Invalid employment type",
      },
    },
    addedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  { timestamps: true }
);

const Job = models.Job || model("Job", JobSchema);

export default Job;
