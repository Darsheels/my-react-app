import categories from "../data/categories.js";
import db from "../db.js";

export function getCategories(req,res) {
  const rows = db.prepare("SELECT name FROM categories").all(); 
  res.json(rows.map(r => r.name));
}

export function addCategories(req,res) {
  const {name} = req.body;

 try {
  db.prepare("INSERT INTO categories (name) VALUES (?)").run(name);
  res.json({success:true , name});
 } catch (err) {
  res.status(400).json({error : "Category already exists"});
 }
}


export function deleteCategories(req,res) {
  const {name} = req.params;
  const results = db.prepare("DELETE FROM categories WHERE name = ?").run(name)
  
  if (results.changes === 0) {
    return res.status(404).json({ error: "Category not found"});
  }
  
  
  res.json({success: true});
  
}

