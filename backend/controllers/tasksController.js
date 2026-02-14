import tasks from "../data/tasks.js";
import db from "../db.js";



export function getTasks(req, res) {
  const rows = db.prepare("SELECT * FROM tasks").all()
  res.json(rows);
}

export function addTask(req, res) {
  const {id,title , category , completed , createdAt} = req.body;

  db.prepare(`
    INSERT INTO tasks (id , title , category , completed , createdAt)
    VALUES (?,?,?,?,?)
    `).run(id , title,category , completed, createdAt);

    res.json(req.body);
}

export function toggleTask(req, res) {
  const { id } = req.params;

  const task = db.prepare("SELECT completed from tasks WHERE id = ?").get(id);

  if (!task) return res.status(404).json({error : "Task not found"});

  const newStatus =  task.completed ? 0 : 1;

  db.prepare("UPDATE tasks SET completed = ? WHERE id = ?").run(newStatus , id);

  res.json({ success: true });
}

export function deleteTask(req,res) {
 const { id } = req.params;
 
 const result = db.prepare("DELETE FROM tasks WHERE id = ?").run(id);

 if (result.changes === 0) {
  return res.status(404).json({error : "Task not found"});
 }

 res.json({success: true});

}