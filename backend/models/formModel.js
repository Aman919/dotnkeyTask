import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  // fullname, email, country, state, city, language, date,   actions
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  }
  // timestamps: true
});

export const User = mongoose.model("User", userSchema);
