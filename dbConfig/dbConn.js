import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    mongoose
      .connect(process.env.MONGO_URI, {
        dbname: "backendapi",
      })
      .then((conn) => {
        console.log(`connected to db : ${conn.connection.host}`);
      });
  } catch (error) {
    console.log(error.message);
  }
};
export default connectToDb;
