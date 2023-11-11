import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";

export const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const newUser = new userModel({ email, password: hash });
    await newUser.save();
    res.status(201).send("Registered");
  } catch (error) {
    res.status(500).send(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send("Wrong email or password");
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(404).send("Wrong email or password");
    }

    const token = jwt.sign({ user: user._id }, process.env.SECRET_KEY);

    return res
      .cookie("token", token, {
        maxAge: 86400 * 1000,
      })
      .status(200)
      .send("Signed in");
  } catch (error) {
    res.status(500).send(error);
  }
};

export const logoutUser = (req, res) => {
  return res
    .clearCookie("token", { path: "/", expires: new Date(0) })
    .status(200)
    .send("Signed out");
};
