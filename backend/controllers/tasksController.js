
import db from "../db.js";



export function getTasks(req, res) {
  const rows = db.prepare("SELECT * FROM tasks").all()
    const formatted = rows.map(task => ({
    ...task,
    createdAt: new Date(task.createdAt).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })
  }));

  res.json(formatted);
}



export function addTask(req, res) {
  const {id,title , category , completed , createdAt} = req.body;

  const safeCompleted = completed ? 1 : 0;
  const safeCategory = category ?? null;
  const safeCreatedAt = createdAt
    ? new Date(createdAt).toISOString()
    : new Date().toISOString();

  db.prepare(`
    INSERT INTO tasks (id , title , category , completed , createdAt)
    VALUES (?,?,?,?,?)
    `).run(id , title,safeCategory , safeCompleted, safeCreatedAt);


    const formattedCreatedAt = new Date(safeCreatedAt).toLocaleString("en-US" , {
      month:"short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });


    res.json({
      id,
      title,
      category:safeCategory,
      completed: !!safeCompleted,
      createdAt: formattedCreatedAt
    });
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