import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name field can't be empty"],
  },

  email: {
    type: String,
    unique : true,
    required: [true, "Please Enter Your Email"],
  },

  password: {
    type: String,
    Select : false,
    required: [true, "Password Cann't be blank"],
    // minlength: [6, "Password must be atleast 6 characters"],
    // maxLength: [20, "password must be less than 20 Characters"],
  },

  createdAt : {
    type : Date,
    default : Date.now,
  }
});
export const User = mongoose.model("User", userSchema);

