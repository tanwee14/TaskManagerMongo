import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDB() {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
        console.log(`Database Connected!`);

}

export default connectDB;
