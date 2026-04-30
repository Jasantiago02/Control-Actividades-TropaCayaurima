import { useState } from "react";
import './sidebar.css';
 const sidebar= () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <button onClick={toggleSidebar}>
                {isOpen ? 'Close' : 'Open'} Sidebar
            </button>
            <div className="sidebar-content">
                {/* Sidebar content goes here */}
            </div>
        </div>
    );
 }