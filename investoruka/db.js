import { fileURLToPath } from "url";
import { dirname } from "path";
import { connect } from "mongoose";
import { config } from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config({ path: __dirname + "/.env" });

const connectDB = async () => {
  try {
    await connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;
