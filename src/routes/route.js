import express from "express"
import { getAllTask, getTask, createTask, updateTask, deleteTask} from "../controllers/taskController.js";
const router = express.Router();


router.get("/", getAllTask)
router.post("/", createTask)
router.get("/:id", getTask)
router.patch("/:id", updateTask)
router.delete("/:id", deleteTask)

export default router;