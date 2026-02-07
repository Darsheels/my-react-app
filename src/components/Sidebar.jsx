export default function SideBar() {
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
                <div className="sidebar-item">Personal</div>
                <div className="sidebar-item">School</div>
                <div className="sidebar-item">Work</div>
            </div>
        </div>
    );
}