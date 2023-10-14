import mongoose from "mongoose";

const stateSchema = new mongoose.Schema({
  ID: { type: Number, required: true },
  Name: { type: String, required: true },
  CountryID: {type: Number, required: true}
});

export const State = mongoose.model("State", stateSchema)