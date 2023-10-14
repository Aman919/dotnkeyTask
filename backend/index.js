import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Form } from "./models/formModel.js";
import cors from 'cors';

const app = express();

// app.use(express.json());
// app.use(cors())

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome");
});

//Route to save a new entry
app.post("/addUser", async (request, response) => {
  try {
    if (
      !request.body.fullname ||
      !request.body.email ||
      !request.body.country ||
      !request.body.state ||
      !request.body.city ||
      !request.body.language
    ) {
      return response.status(400).send({
        message: "Send all required fields",
      });

      const newUser = {
        fullname: request.body.fullname,
        email: request.body.email,
        country: request.body.country,
        state: request.body.state   ,
        city: request.body.city,
        language: request.body.language
      };
      const form = await Form.create(newUser)

      return response.status(201).send(newUser)
    }
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
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
