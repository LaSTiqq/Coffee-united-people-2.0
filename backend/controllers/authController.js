import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";

export const loginUser = async (req, res) => {
  try {
    const { login, password } = req.body;
    const user = await userModel.findOne({ login });
    if (!user) {
      return res.status(404).send("Wrong login or password");
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(404).send("Wrong login or password");
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);

    return res
      .cookie("token", token, {
        maxAge: 86400 * 1000,
      })
      .status(200)
      .send("Login succeed");
  } catch (error) {
    res.status(500).send(error);
  }
};

export const logoutUser = (req, res) => {
  return res
    .clearCookie("token", { path: "/", expires: new Date(0) })
    .status(200)
    .send("Logout succeed");
};
