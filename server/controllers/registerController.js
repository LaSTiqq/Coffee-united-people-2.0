import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const newUser = new userModel({ email, password: hash });
    await newUser.save();
    res.status(201).send("Register succeed");
  } catch (error) {
    res.status(500).send(error);
  }
};

export default registerUser;
