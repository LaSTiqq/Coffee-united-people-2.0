import userModel from "../models/userModel.js";

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userModel.find({}, { password: 0 });

    res.status(202).json(allUsers);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default getAllUsers;
