import { useState } from "react";

export default function TaskBar({tasks , setTasks , selectedCatagory}) {
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
            completed: false,
            category: selectedCatagory === "All Tasks" ? "Uncategorized" : selectedCatagory
        };

        setTasks([...tasks , taskObj]);
        setNewTask("");
    };


    const toggleComplete = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? {...task , completed: !task.completed} : task
        )
      );
    };

    const filteredTasks = selectedCatagory === "All Tasks"
    ? tasks 
    : selectedCatagory === "Completed" 
    ? tasks.filter((task) => task.completed) 
    : tasks.filter((task) => task.category === selectedCatagory);


    return (
        <div className="taskbar">
            <h1 className="taskbar-title">{selectedCatagory}</h1>
            <div className="task-list">
                {filteredTasks.map((task) => {
                    return(
                    <div key={task.id} className="task-item">
                        <input type="checkbox" className="task-checkbox" checked={task.completed} onChange={() => {toggleComplete(task.id)}}/>
                        <div className="task-content">
                            <div className="task-title">{task.title}</div>
                            <div className="task-timestamp">{task.createdAt}</div>
                        </div>
                    </div>
                )})}
            </div>
            <div className="bottom">
            <input className="AddTaskInput" placeholder="Add A Task" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
            <button className="AddTaskButton" onClick={addTask}>Add Task</button>
        </div>
        </div>
    );

}