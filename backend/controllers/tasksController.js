import tasks from "../data/tasks.js";

export function getTasks(req, res) {
  res.json(tasks);
}

export function addTask(req, res) {
  const newTask = req.body;
  tasks.push(newTask);
  res.json(newTask);
}

export function toggleTask(req, res) {
  const id = Number(req.params.id);

  const updated = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );

  tasks.length = 0;
  tasks.push(...updated);

  res.json({ success: true });
}

export function deleteTask(req,res) {
 const id = Number(req.params.id);

 const index = tasks.findIndex(task => task.id === id);
 if (index === -1) {
    return res.status(404).json({ error: "Task not found"});
 }


 tasks.splice(index , 1);
 res.json({success: true});

}