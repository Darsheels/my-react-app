export default function TaskBar() {
    // const newTask = {
    //     id:Date.now(),
    //     title: taskTitle,
    //     description: "",
    //     createdAt: new Date().toLocaleString(),
    //     completed: false,
        
    // }

    return (
        <div className="taskbar">
            <h1 className="taskbar-title">All Tasks</h1>
            <div className="task-list">
                <div className="task-item">
                    <input type="checkbox" className="task-checkbox"/>
                    <div className="task-content">
                        <div className="task-title">Laundry</div>
                        <div className="task-timestamp">{new Date().toLocaleString("en-US" , {
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit"
                        })}</div>
                    </div>  
                </div>
            </div>
        </div>
    );

}