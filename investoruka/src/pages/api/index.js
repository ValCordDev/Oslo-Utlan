import dotenv from "dotenv";
import express from "express";
import connectDB from "../../../db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { default as User } from "../../../models/User.js";
import { default as Item } from "../../../models/Item.js";
const app = express();
const port = 3001;
dotenv.config();

connectDB(); // koble til databasen

app.listen(port, () => {
  console.log(`Server lytter på port ${port}`);
});

app.get("/getUser", async (req, res) => {
  try {
    const userID = req.query;
    const user = await User.findById(userID.userID);
    res.status(200).json({ user: user });
  } catch (error) {
    console.error("Error while getting user:", error);
    res.status(500).json({ status: "Internal Server Error" });
  }
});

app.post("/register", async (req, res) => {
  try {
    const { username, password, mail } = req.query;
    const hashedPassword = await bcrypt.hash(password, 10); // hash passordet
    const user = new User({
      // User er en mongoose model
      mail: mail,
      username: username,
      password: hashedPassword,
    });
    await user.save(); // lagrer i databasen
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

app.put("/rent", async (req, res) => {
  // lei en gjenstand (PUT fordi det endrer på databasen)
  const { itemID, userID, token } = req.query; // token er en JWT
  let verified = false;
  try {
    jwt.verify(token, process.env.JWT_SECRET, (err) => {
      // verifiserer token
      if (err) {
        console.log(err);
      } else {
        verified = true;
      }
    });
  } catch (error) {
    console.error("Error verifying JWT:", error);
  }
  if (verified) {
    const item = await Item.findById(itemID); // finn gjenstanden i databasen
    const user = await User.findById(userID); // finn brukeren i databasen
    if (item.isRented) {
      res.status(400).json({ status: "Item is already rented" });
    } else {
      item.isRented = true;
      item.dateRented = Date.now();
      item.renter = user.username;
      user.renting.push(item.title);
      await item.save();
      await user.save();
      res.status(200).json({ status: "Item rented" });
    }
  }
});

// bare for enkelhetens skyld. kommer nok til å slette denne etterhvert
app.post("/_addItem", async (req, res) => {
  const { title, description, imgURL } = req.query;
  const item = new Item({
    title: title,
    description: description,
    imgURL: imgURL,
  });
  await item.save();
  res.status(200).json({ status: "Item added" });
});
