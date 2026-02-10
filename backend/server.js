import express from "express";
import cors from "cors";

import TasksRouter from "./routes/tasks.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/tasks" , TasksRouter);

app.get("/" , (req,res) => {
    res.send("Backend is running")
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

