import express from "express"
import { addTask, getTask, removeTask, updateTask} from "../controllers/taskController.js"
import requireAuth from "../middleware/requireAuth.js";
const router = express.Router();

router.post("/addTask", requireAuth, addTask)
router.get("/getTask",requireAuth, getTask)
router.get("/removeTask/:id",requireAuth, removeTask)
router.put('/todos/:id', updateTask);

export default router;