import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  // fullname, email, country, state, city, language, date,   actions
  ID: {
    type: Number, 
    required: true
  },
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  Password:{
    type: String,
    required: true
  },
  CountryID: {
    type: Number,
    required: true,
  },
  StateID: {
    type: Number,
    required: true,
  },
  CityID: {
    type: Number,
    required: true,
  },
  LanguageIDs: {
    type: String,
    required: true,
  },
  IsActive:{
    type: Boolean,
    required: true
  },
  createdDate:{
    type: Date, 
    required: true
  },
  ModifiedDate:{
    type: Date, 
    required: ture
  }
  // timestamps: true
});

export const Customer = mongoose.model("Customer", customerSchema);
