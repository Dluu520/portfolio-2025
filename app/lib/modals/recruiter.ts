import { Schema, model, models } from "mongoose";
const RecruiterSchema = new Schema(
  {
    name: { type: "string", required: true },
    // phone: { type: "string", required: true },
    email: { type: "string", required: true },
    // company: { type: "string", required: true },
    // position: { type: "string", required: true },
    message: { type: "string", required: true },
    // jobDescription: [
    //   { position: { type: "string", required: true } },
    //   { description: { type: "string" } },
    //   { link: { type: "string", required: true } },
    // ],
  },
  { timestamps: true }
);

const Recruiter = models.Recruiter || model("Recruiter", RecruiterSchema);

export default Recruiter;
