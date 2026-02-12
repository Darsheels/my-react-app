import SideBar from "./components/Sidebar";
import TaskBar from "./components/TaskBar";
import { useEffect, useState } from "react";

export default function App() {
  const [darkMode , setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  }

  const [tasks , setTasks] = useState([]);
  const [selectedCatagory , setSelectedCatagory] = useState("All Tasks")
  const [categories , setCategories] = useState(["Personal","School","Work"]);

  //new stuff
  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error("Error loading tasks" , err));
      } , []);
  //new stuff
  
    return (
      
      <div className={darkMode ? "app dark" : "app"}>
        <SideBar
        categories = {categories}
        setCategories = {setCategories}
        selectedCatagory = {selectedCatagory}
        setSelectedCatagory = {setSelectedCatagory}/>
        <div className="main-content">
          <TaskBar
          tasks = {tasks}
          setTasks = {setTasks}
          selectedCatagory = {selectedCatagory}/>
          <button className="dark-mode-button" onClick={toggleTheme}>DarkMode</button>
        </div>
      </div>

    );
}