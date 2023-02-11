import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";

export const loginUser = async (req, res) => {
  try {
    const user = await userModel.findOne({ login: req.body.login });
    if (!user) {
      return res.status(404).send("Wrong login or password");
    }

    const correctPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!correctPassword) {
      return res.status(404).send("Wrong login or password");
    }

    const token = jwt.sign({ user }, process.env.SECRET_KEY);
    res.cookie("token", token, {
      maxAge: 86400 * 1000,
      sameSite: "strict",
    });
    return res.status(200).send("Login succeed");
  } catch (error) {
    res.status(500).send(error);
  }
};

export const logoutUser = (req, res) => {
  res.clearCookie("token");
  return res.status(200).send("Logout succeed");
};
