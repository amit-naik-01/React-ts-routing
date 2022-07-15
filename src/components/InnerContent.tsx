import React from 'react';
import { Outlet } from 'react-router-dom';

/**children routes render based on route with "outlet"*/
const InnerContent =() =>{
    return <div className="inner-content">
        <Outlet/>  
    </div>

}

export default InnerContent;