import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
  try {
    const { login, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const newUser = new userModel({ login, password: hash });
    await newUser.save();
    res.status(201).send("Register succeed");
  } catch (error) {
    if (error.errors.login.name === "ValidatorError") {
      res.status(400).send("Username already taken");
    } else {
      res.status(500).send(error);
    }
  }
};

export default registerUser;
