import express from "express";
import { Customer } from "../models/customerModel";

const router = express.Router();

//Route to save a new entry
router.post("/users", async (request, response) => {
  try {
    const { fullname, email, country, state, city, language } = request.body;
    if (!fullname || !email || !country || !state || !city || !language) {
      return response.status(400).send({
        message: "Send all required fields",
      });
    }
    const newUser = {
      fullname,
      email,
      country,
      state,
      city,
      language,
    };
    const user = await Customer.create(newUser);

    return response.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//get a list of all users
router.get("/users", async (request, response) => {
  try {
    const users = await Customer.find({});

    return response.status(200).json({
        count: users.length,
        data: users,
    });
  } catch (error) {
    console.error("ERror fetching  users: ", error);
    response.status(500).json({ message: "internal server error" });
  }
});

//get user details by ID
router.get("/users/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const user = await Customer.findById(id);
    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }
    return response.status(200).json(user);
  } catch (error) {
    console.error("ERror fetching  users: ", error);
    response.status(500).json({ message: "internal server error" });
  }
});

//update a user
router.put('/:id', async(request, response)=>{

    try {
        const { fullname, email, country, state, city, language } = request.body;
        if (!fullname || !email || !country || !state || !city || !language) {
          return response.status(400).send({
            message: "Send all required fields",
          });
        }
        const { id } = request.params;
        const result = await Customer.findByIdAndUpdate(id, request.body);

        if(!result){
            return response.status(404).json({message: 'User not found'})
        }
        return response.status(200).send({message: 'User updated successfully'})

}catch(error){
    console.log(error.message);
    response.status(500).send({message: error.message});
}
});

//Delete user by id
router.delete("/users/:id", async (request, response) => {
  try {
    const deletedUser = await Customer.findByIdAndDelete(request.params.id);
    if (!deletedUser) {
      return response.status(404).json({ message: "User not found" });
    }
    return response.status(204).send();
  } catch (error) {
    console.error("ERror fetching  users: ", error);
    response.status(500).json({ message: "internal server error" });
  }
});

export default router;
