import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new userModel({
      ...req.body,
      password: hash,
    });
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
