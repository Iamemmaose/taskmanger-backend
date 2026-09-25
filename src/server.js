import express from "express";
import task from "./routes/route.js";
import { ConnectDB } from "./db/connect.js";
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}))

const port = 5000;

app.use("/api/v1/tasks", task);

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename)
dotenv.config({
    path: path.resolve(_dirname, "../.env")
})


const start = async () => {
    try {
        await ConnectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Your server is running on port ${port}..`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()

