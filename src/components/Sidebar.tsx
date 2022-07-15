import React from "react";
import {Link} from "react-router-dom";

const Sidebar = () => {

    
    return(
        <div className="sidebar">
            <div className="sidebar-items">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/sources" >Sources</Link>
                <Link to="/commits" >Commits</Link>
                <Link to="/branches" >Branches</Link>
                <Link to="/pull" >Pull</Link>
                <Link to="/pipelines" >Pipelines</Link>
            </div>

        </div>
    )
}

export default Sidebar;