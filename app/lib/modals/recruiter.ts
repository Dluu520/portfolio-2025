import { Schema, model, models } from "mongoose";
const RecruiterSchema = new Schema(
  {
    name: { type: String, required: true },
    // phone: { type: String, required: true },
    email: { type: String, required: true },
    // company: { type: String, required: true },
    // position: { type: String, required: true },
    message: { type: String, required: true },
    subject: { type: String, required: false },
    // jobDescription: [
    //   { position: { type: "string", required: true } },
    //   { description: { type: "string" } },
    //   { link: { type: "string", required: true } },
    // ],
  },
  { timestamps: true },
);

const Recruiter = models.Recruiter || model("Recruiter", RecruiterSchema);

export default Recruiter;
