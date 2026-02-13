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


