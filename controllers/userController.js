import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendCookie } from "../utils/features.js";
import ErrorHadler from "../middleware/error.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) return next(new ErrorHadler("User Already Exists", 400));

    const hashPassword = await bcrypt.hash(password, 10);

    user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    //from utils folder because no repeatation of code
    sendCookie(user, res, "user Registered Successfully", 201);
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) return next(new ErrorHadler("Invalid Email or Password", 400));

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return next(new ErrorHadler("Invalid Email or Password", 400));

    sendCookie(user, res, `welcome, ${user.name}`, 200);
  } catch (error) {
    next(error);
  }
};

export const getMyProfile = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: req.user,
    });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", null, { 
        expires: new Date(Date.now()),
        sameSite : process.env.NODE_ENV==="Development" ? "lax" : "none",
        secure : process.env.NODE_ENV==="Development" ? false :  true,
      })
      .json({
        success: true,
      });
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req, res) => {};
