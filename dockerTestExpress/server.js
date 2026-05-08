const express = require("express");
const mongoose = require("mongoose");
const User=require("./userSchema")
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/*
|--------------------------------------------------------------------------
| MongoDB Connection
|--------------------------------------------------------------------------
*/

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

/*
|--------------------------------------------------------------------------
| User Schema
|--------------------------------------------------------------------------
*/


/*
|--------------------------------------------------------------------------
| Route
|--------------------------------------------------------------------------
*/

app.get("/fetch/me", async (req, res) => {
  try {
    // Create random user
    const randomUser = {
      name: `User_${Math.floor(Math.random() * 1000)}`,
      email: `user${Math.floor(Math.random() * 1000)}@gmail.com`,
      age: Math.floor(Math.random() * 50) + 18,
    };

    // Save to database
    await User.create(randomUser);

    // Fetch all users
    const users = await User.find();

    // Return all users
    res.status(200).json(users);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

/*
|--------------------------------------------------------------------------
| Server
|--------------------------------------------------------------------------
*/

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});