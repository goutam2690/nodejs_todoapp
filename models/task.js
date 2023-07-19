import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: [true, "Title field can't be empty"],
  },

  description : {
    type:String,
    // required : true,
  },

  user : {
    type : mongoose.Schema.Types.ObjectId,
    ref :"User",
    // required : true,
  },

  isCompleted : {
    type : Boolean,
    default : false,
  },

  createdAt : {
    type : Date,
    default : Date.now,
  }

});
export const Task = mongoose.model("Task", userSchema);

