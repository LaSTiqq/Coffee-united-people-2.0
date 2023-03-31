import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    default: "Guest",
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.plugin(uniqueValidator);

export default mongoose.model("user", userSchema);
