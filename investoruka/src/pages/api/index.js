import dotenv from "dotenv";
import express from "express";
import connectDB from "../../../db.js";
import jwt from "jsonwebtoken";
import cors from "cors";
import bcrypt from "bcrypt";
import { default as User } from "../../../models/User.js";
import { default as Item } from "../../../models/Item.js";
import { user } from "@nextui-org/theme";
const app = express();
const port = 3001;
dotenv.config();

connectDB(); // koble til databasen

app.use(cors());

app.listen(port, () => {
  console.log(`Server lytter på port ${port}`);
});

app.get("/getUser", async (req, res) => {
  try {
    const userID = req.query.userID;
    const user = await User.findById(userID);
    res.status(200).json({ user: user });
  } catch (error) {
    console.error("Error while getting user:", error);
    res.status(500).json({ status: "Internal Server Error" });
  }
});

app.get("/getItems", async (req, res) => {
  try {
    const items = await Item.find({});
    res.status(200).json({ items: items });
  } catch (error) {
    console.error("Error while getting items:", error);
    res.status(500).json({ status: "Internal Server Error" });
  }
});

app.post("/verifyUser", async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log("error:", err);
      } else {
        return res.status(200).json({ uid: decoded._id });
      }
    });
  } catch (error) {
    console.error("Error verifying JWT:", error);
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
    const { mail, password } = req.query;
    const user = await User.findOne({ mail: mail }); // finn brukeren i databasen
    if (!user || !user.comparePassword(password)) {
      res.status(400).json({ status: "Wrong username or password" }); // hvis brukeren ikke finnes eller passordet er feil
    } else {
      const token = jwt.sign(
        // lager en token
        { username: user.username, _id: user._id },
        process.env.JWT_SECRET
      );
      res.status(200).json({ token: token, uid: user._id }); // sett til localstorage i frontend
    }
  } catch (error) {
    console.error("Error while logging in:", error);
    res.status(500).json({ status: "Internal Server Error" });
  }
});

app.put("/rent", async (req, res) => {
  // lei en gjenstand (PUT fordi det endrer på databasen)
  const { itemID, userID } = req.query; // token er en JWT
  const item = await Item.findById(itemID); // finn gjenstanden i databasen
  const user = await User.findById(userID); // finn brukeren i databasen
  if (item.isRented) {
    res.status(400).json({ status: "Item is already rented" });
  } else {
    item.code = Math.floor(Math.random() * 1000000); // generer en kode
    item.isRented = true;
    item.dateRented = Date.now();
    item.renter = userID;
    user.renting.push(item.title);
    await item.save();
    await user.save();
    res.status(200).json({ status: "Item rented" });
  }
});

app.put("/return", async (req, res) => {
  try {
    const { itemID, userID, code } = req.query; // token er en JWT
    const item = await Item.findById(itemID); // finn gjenstanden i databasen
    const user = await User.findById(userID); // finn brukeren i databasen
    if (item.code !== code) {
      res.status(400).json({ status: "Wrong code" });
    } else if (!item.isRented) {
      res.status(400).json({ status: "Item is already returned/not rented" });
    } else {
      item.code = null;
      item.isRented = false;
      item.dateRented = null;
      item.renter = null;
      const index = user.renting.indexOf(item.title);
      if (index !== -1) {
        user.renting.splice(index, 1);
      }
      await item.save();
      await user.save();
      res.status(200).json({ status: "Item rented" });
    }
  } catch (error) {
    console.log(error);
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
