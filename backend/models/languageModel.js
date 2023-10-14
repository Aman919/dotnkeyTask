import mongoose from "mongoose";

const languageSchema = new mongoose.Schema({
  ID: { type: Number, required: true },
  Name: { type: String, required: true },
});


export const Language = mongoose.model("Language", languageSchema)