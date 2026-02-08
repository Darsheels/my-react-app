import { useState } from "react";

export default function TaskBar() {
    const [tasks , setTasks] = useState([]);
    const [newTask , setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim() === "") return;

        const taskObj = {
            id: Date.now(),
            title: newTask,
            createdAt: new Date().toLocaleString("en-US" , {
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit"
                }),
            completed: false
        };

        setTasks([...tasks , taskObj]);
        setNewTask("");
    };


    return (
        <div className="taskbar">
            <h1 className="taskbar-title">All Tasks</h1>
            <div className="task-list">
                {tasks.map((task) => {
                    return(
                    <div key={task.id} className="task-item">
                        <input type="checkbox" className="task-checkbox"/>
                        <div className="task-content">
                            <div className="task-title">{task.title}</div>
                            <div className="task-timestamp">{task.createdAt}</div>
                        </div>
                    </div>
                )})}
            </div>
            <div className="bottom">
            <input className="AddTaskInput" placeholder="Add A Task" value={newTask} onChange={(e) => setNewTask(e.target.value)}></input>
            <button className="AddTaskButton" onClick={addTask}>Add Task</button>
        </div>
        </div>
    );

}