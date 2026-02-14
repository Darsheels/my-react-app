import { useState } from "react";
import TrashCan from "../assets/TrashCan.jfif";


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

        fetch("http://localhost:5000/tasks" , {
            method:"POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(taskObj)
        })
            .then(res => res.json())
            .then(newTask => {
                setTasks(prev => [...prev, newTask]);
                setNewTask("");
            })
            .catch(err => console.error("error adding task:" , err));
    };


    const toggleComplete = (id) => {
        
       fetch(`http://localhost:5000/tasks/${id}` , {
        method: "PATCH"
    })
        .then(() => {
            setTasks(prev =>
                prev.map(task =>
                    task.id === id
                        ? { ...task , completed: !task.completed}
                        :task
                )
            );
        })
        .catch(err => console.error("Error toggling task" , err));      
    };


    const deleteTask = (id) => {
        fetch(`http://localhost:5000/tasks/${id}` , {
        method: "DELETE"    
        })
            .then(() => {
                setTasks(prev => prev.filter(task => task.id !== id));
            })
            .catch(err => console.error("Error deleting task:" , err));
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
                        <button className="delete-btn" onClick={() => deleteTask(task.id)}>
                            <img src={TrashCan} alt="delete" className="deleted-icon"/>
                        </button>
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