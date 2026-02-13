import { useState } from "react";
import TrashCan from "../assets/TrashCan.jfif"

export default function SideBar({categories , setCategories , selectedCatagory , setSelectedCatagory}) {
    const [newCategory , setNewCategory] = useState("");
    
    const addCategory = () => {
        if (newCategory.trim() === "") return;

        fetch("http://localhost:5000/categories" , {
            method: "POST" ,
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({name: newCategory})
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.error(data.error);
                    return;
                }

                setCategories(prev => [...prev , data.name]);
                setNewCategory("");
            })
            .catch(err => console.error("Error adding category" , err))

    };


    const  deleteCategory = (name) => {
        fetch(`http://localhost:5000/categories/${name}`, {
        method: "DELETE"
        })
             .then(() => {
                setCategories(prev => prev.filter(category => category !== name));
             })
             .catch(err => console.error("Error deleting task:" , err));
    }

    return (
        <div className="sidebar">
            <div className="add-category">
                <input className="category-input"
                placeholder="New category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}/>
                <button className="category-button" onClick={addCategory}>
                Add
                </button>
            </div>
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

                    <button className="cat-delete" onClick={(e) => {
                        e.stopPropagation();
                        deleteCategory(cat);
                        }}>
                        <img src= {TrashCan} alt="delete" className="deletedcat-icon"></img>
                    </button>
                    </div>
                    
                ))}
            </div>

            
        </div>
    );
}