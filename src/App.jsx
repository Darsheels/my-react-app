import AddTask from "./components/AddTaskForm";
import SideBar from "./components/Sidebar";

export default function App() {
    return (
      <div className="app-container">
        <SideBar/>
        <AddTask/>
      </div>

    );
}