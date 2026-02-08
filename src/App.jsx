import SideBar from "./components/Sidebar";
import TaskBar from "./components/TaskBar";
import { useState } from "react";

export default function App() {
  const [darkMode , setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  }
  
  
    return (
      
      <div className={darkMode ? "app dark" : "app"}>
        <SideBar/>
        <div className="main-content">
          <TaskBar/>
          <button className="dark-mode-button" onClick={toggleTheme}>DarkMode</button>
        </div>
      </div>

    );
}