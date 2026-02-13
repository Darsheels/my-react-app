import categories from "../data/categories";

export function getCategories(req,res) {
    res.json(categories);
}

export function addCategories(req,res) {
    const newCategory = req.body;
    categories.push(newCategory);
    res.json(newCategory);
}

export function deleteCategory(req,res) {
    const id = Number(req.params.id);

    const index = categories.findIndex(category => category.id === id);
    if (index === -1) {
        return res.status(404).json({error: "Category not found"});
    }

    categories.splice(index);
    res.json({success: true});
}
