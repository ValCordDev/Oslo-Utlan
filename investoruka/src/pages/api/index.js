import dotenv from "dotenv";
import express from "express";
import connectDB from "../../../db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { default as User } from "../../../models/User.js";
const app = express();
const port = 3001;
dotenv.config();

connectDB(); // koble til databasen

app.listen(port, () => {
  console.log(`Server lytter på port ${port}`);
});

app.get("/register", async (req, res) => {
  try {
    const { username, password, mail } = req.query;
    const hashedPassword = bcrypt.hash(password, 10); // hash passordet
    const user = new User({
      // User er en mongoose model
      mail: mail,
      username: username,
      password: hashedPassword,
    });
    await user.save(); // lagrer i databasen
    console.log(user._id);
    const token = jwt.sign(
      // lager en token
      { username: username, _id: user._id },
      process.env.JWT_SECRET
    );
    res.status(200).json({ token: token }); // sett til localstorage i frontend
  } catch (error) {
    console.error("Error while registering:", error);
    res.status(500).json({ status: "Internal Server Error" });
  }
});

app.get("/login", async (req, res) => {
  try {
    const { username, password } = req.query;
    const user = await User.findOne({ username: username }); // finn brukeren i databasen
    if (!user || !user.comparePassword(password)) {
      res.status(400).json({ status: "Wrong username or password" }); // hvis brukeren ikke finnes eller passordet er feil
    } else {
      const token = jwt.sign(
        { username: user.username }, // lager en token
        process.env.JWT_SECRET // hemmelig nøkkel
      );
      res.status(200).json({ token: token, username: user.username }); // sett til localstorage i frontend
    }
  } catch (error) {
    console.error("Error while logging in:", error);
    res.status(500).json({ status: "Internal Server Error" });
  }
});
