import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import InnerContent  from "./components/InnerContent";
import Sources from "./components/Sources";
import Dashboard from "./components/Dashboard";
import Commits from "./components/Commits";
import Branches from "./components/Branches";
import Pull from "./components/Pull";
import Pipelines from "./components/Pipelines";
import Tab1 from "./components/Tab1";
import Tab2 from "./components/Tab2";
import Tab3 from "./components/Tab3";
import Tab4 from "./components/Tab4";



function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<InnerContent/>}>
               <Route path="/" element={<Navigate replace to="dashboard" />}  />
               <Route path="dashboard" element={<Dashboard/>} />
                <Route path="sources" element={<Sources/>}>
                    <Route path="/sources" element={<Navigate replace to ="tab1" />} />
                    <Route path="tab1" element={<Tab1/>} />
                    <Route path="tab2" element={<Tab2/>} />
                    <Route path="tab3" element={<Tab3/>} />
                    <Route path="tab4" element={<Tab4/>} />
                </Route>
                <Route path="commits" element={<Commits/>} />
                <Route path="branches" element={<Branches/>} />
                <Route path="pull" element={<Pull />} />
                <Route path="pipelines" element={<Pipelines/>} />
            </Route>
        </Routes>
    )    
}

export default MainRoutes;
