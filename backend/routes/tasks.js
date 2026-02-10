import { Router } from "express";
import { getTasks, addTask, toggleTask } from "../controllers/tasksController.js";

const router = Router();

router.get("/", getTasks);
router.post("/", addTask);
router.patch("/:id", toggleTask);

export default router;
