import "dotenv/config";
import express from "express";
import task from "./routes/route.js";
import { connectDB } from "./db/connect.js";

const app = express();

app.use(express.json());

const port = 5000;

app.use("/api/v1/tasks", task);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Your server is running on port ${port}..`);
        });
    } catch (err) {
        console.log(err);
    }
};



start();