import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { User } from "./models/formModel.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  return response.status(200).send("Welcome");
});

//Route to save a new entry
app.post("/users", async (request, response) => {
  try {
    const { fullname, email, country, state, city, language } = reque.body;
    if (!fullname || !email || !country || !state || !city || !language) {
      return response.status(400).send({
        message: "Send all required fields",
      });
    }
    const newUser = new User({
      fullname,
      email,
      country,
      state,
      city,
      language,
    });
    await newUser.save();

    return response.status(201).send(form);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//get a list of all users
app.get("/users", async (request, response) => {
  try {
    const users = await User.find();
    return response.status(200).json(users);
  } catch (error) {
    console.error("ERror fetching  users: ", error);
    response.status(500).json({ message: "internal server error" });
  }
});

//get user details by ID
app.get("/users/:id", async (request, response) => {
  try {
    const user = await User.findById(request.params.id);
    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }
    return response.status(200).json(user);
  } catch (error) {
    console.error("ERror fetching  users: ", error);
    response.status(500).json({ message: "internal server error" });
  }
});

//Delete user by id
app.delete("/users/:id", async(request, response)=>{
    try{
        const deletedUser = await User.findByIdAndDelete(request.params.id);
        if (!deletedUser){
            return response.status(404).json({message: "User not found"});

        }
        return response.status(204).send();
    } catch(error){
        console.error("ERror fetching  users: ", error);
    response.status(500).json({ message: "internal server error" });
    }
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listenting for port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
