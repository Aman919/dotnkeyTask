import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/route.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use('/user', router)

router.get("/", (request, response) => {
    return response.status(200).send("Welcome");
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
