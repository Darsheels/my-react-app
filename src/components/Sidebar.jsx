import { useState } from "react";

export default function SideBar() {
    const [newCategory , setNewCategory] = useState("");
    const [categories , setCategories] = useState(["Personal","School","Work"]);
    const addCategory = () => {
        if (newCategory.trim() === "") return;
        
        setCategories([...categories , newCategory]);
        setNewCategory("");
    };

    return (
        <div className="sidebar">
            <div className="sidebar-title">Noted</div>

            <div className="sidebar-section">
                <div className="sidebar-item active">All Tasks</div>
                <div className="sidebar-item">Today</div>
                <div className="sidebar-item">Completed</div>
            </div>

            <div className="sidebar-section">
                <div className="sidebar-title">Categories</div>

                {categories.map((cat,index) => (
                    <div key={index} className="sidebar-item">
                    {cat}
                    </div>
                ))}
            </div>

            <div className="add-category">
                <input className="category-input"
                placeholder="New category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}/>
                <button className="category-button" onClick={addCategory}>
                Add
                </button>
            </div>
        </div>
    );
}