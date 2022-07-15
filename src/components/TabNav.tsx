import React from "react";
import { Link,useLocation } from "react-router-dom";

const TabNav =() => {

    const location = useLocation()
    return(
        <div className="tab-nav">
            <Link to="/sources/tab1" className={location.pathname ==='/sources/tab1'?'tab-active':''} >Tab1</Link>
            <Link to="/sources/tab2" className={location.pathname ==='/sources/tab2'?'tab-active':''} >Tab2</Link>
            <Link to="/sources/tab3" className={location.pathname ==='/sources/tab3'?'tab-active':''} >Tab3</Link>
            <Link to="/sources/tab4" className={location.pathname ==='/sources/tab4'?'tab-active':''} >Tab4</Link>

        </div>
    )
}

export default TabNav;