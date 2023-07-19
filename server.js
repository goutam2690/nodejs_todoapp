import app from './app.js';
import connectToDb from "./dbConfig/dbConn.js"
//database connection
connectToDb();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
  });
  