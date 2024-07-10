// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at : ${process.env.PORT} `);
    });
    app.on("error", (error) => {
      console.log("ERROR:", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed!!");
  });

//app.use() used for middleware configuration

// app.listen(process.env.POR, () => {
//   console.log("Server is up and running");
// });
/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR:", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR:", error);
    throw err;
  }
})();
*/
