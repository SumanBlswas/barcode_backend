import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  parent: String,
  address: String,
  dist: String,
  state: String,
  pin: String,
  phone: String,
});

const userModel = mongoose.model("user", userSchema);

export { userModel };
