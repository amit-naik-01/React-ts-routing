import React from "react";
import { Outlet,useLocation,Link } from "react-router-dom";
// import TabNav from "./TabNav";

const Sources =() => {

    const location = useLocation()

    return(
        <div className="source-tab">
            <h2>Sources</h2>
            
            <div className="source-heading">
                    {/**tab navigation */}
                    {/* <TabNav/> */}
                    <div className="tab-nav">
                    <Link to="/sources/tab1" className={location.pathname ==='/sources/tab1'?'tab-active':''} >Tab1</Link>
                    <Link to="/sources/tab2" className={location.pathname ==='/sources/tab2'?'tab-active':''} >Tab2</Link>
                    <Link to="/sources/tab3" className={location.pathname ==='/sources/tab3'?'tab-active':''} >Tab3</Link>
                    <Link to="/sources/tab4" className={location.pathname ==='/sources/tab4'?'tab-active':''} >Tab4</Link>
                    </div>

                    {/**tab inner content */}
                    <Outlet/>
             </div>
        </div>
    )
}

export default Sources;