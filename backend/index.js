const express = require("express");
const cors = require("cors");
const { connectDB } = require("./db/models");

const app = express();
const port = process.env.PORT;

require("dotenv").config();
//using cors
app.use(cors());

//if you want to use the body of request use a middle-ware:
app.use(express.json());
//and set the  header content-type as json

// Available Routes:
// const user = require("./routes/user");
// app.use("/api/user", user);

app.listen(port, async () => {
  console.log(
    `Management System backend(server) listening at http://localhost:${port}`
  );
  try {
    await connectDB();
    // const { db } = require("./db/models");
    // console.log("Models: ", db);
  } catch (error) {
    console.error("Error: ", error);
  }
});
