import { useState } from "react";

export default function SideBar({categories , setCategories , selectedCatagory , setSelectedCatagory}) {
    const [newCategory , setNewCategory] = useState("");
    
    const addCategory = () => {
        if (newCategory.trim() === "") return;
        setCategories([...categories , newCategory]);
        setNewCategory("");
    };

    return (
        <div className="sidebar">
            <div className="sidebar-title">Noted</div>

            <div className="sidebar-section">
                <div className={`sidebar-item ${selectedCatagory === "All Tasks" ? "active" : ""}`} onClick={() => setSelectedCatagory("All Tasks")}>All Tasks</div>
                <div className={`sidebar-item ${selectedCatagory === "Today" ? "active" : ""}`} onClick={() => setSelectedCatagory("Today")}>Today</div>
                <div className={`sidebar-item ${selectedCatagory === "Completed" ? "active" : ""}`} onClick={() => setSelectedCatagory("Completed")}>Completed</div>
            </div>

            <div className="sidebar-section">
                <div className="sidebar-title">Categories</div>

                {categories.map((cat,index) => (
                    <div key={index} className={`sidebar-item ${selectedCatagory === cat ? "active" : ""}`} onClick={() => setSelectedCatagory(cat)}>
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