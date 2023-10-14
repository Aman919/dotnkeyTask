import mongoose from "mongoose";

const countrySchema = new mongoose.Schema({
  ID: { type: Number, required: true },
  Name: { type: String, required: true },
});

export const Country = mongoose.model("Country", countrySchema)