import dotenv from "dotenv";
import express from "express";
import connectDB from "../../../db.js";
import { default as User } from "../../../models/User.js";
const app = express();
const port = 3001;
dotenv.config();
connectDB();

app.listen(port, () => {
  console.log(`Server lytter på port ${port}`);
});

app.get("/register", (req, res) => {
  const { username, password, mail } = req.query;
  const user = new User({
    mail: mail,
    username: username,
    password: password,
  });
  res.send(
    `Registrerer bruker ${username} med passord ${password} og mail ${mail}`
  );
});
