import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  ID: { type: Number, required: true },
  Name: { type: String, required: true },
  StateID: {type: Number, required: true}
});

export const City = mongoose.model("State", citySchema)