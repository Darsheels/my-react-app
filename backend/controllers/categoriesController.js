import categories from "../data/categories.js";

export function getCategories(req,res) {
    res.json(categories);
}

export function addCategories(req,res) {
  const {name} = req.body;

  if (!name || name.trim() === "") {
    return res.status(400).json({error : "Category name is requred"});
  }

  if (categories.includes(name)) {
    return res.status(400).json({error: "Category already exists"});
  }

  categories.push(name);
  res.json({success: true, name});

}


export function deleteCategories(req,res) {
  const {name} = req.body;
  const index  = categories.indexOf(name);
  
  if (index === -1) {
    return res.status(404).json({ error: "Category not found"});
  }
  
  categories.splice(index , 1);
  res.json({success: true});
  
}

