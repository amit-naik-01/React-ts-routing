import React from 'react';

import MainRoutes from './Routes';
import Sidebar from './components/Sidebar';
// import Navbar from "./components/Navbar"
import "./styles.css";

function App() {
  return (
    <div className="wrapper">
      {/* Navbar */}
      {/**<Navbar />*/}
      <div className="app">
        {/** sidebar */}
        <Sidebar/>
        
        {/** inner container */}
        <MainRoutes/>
      </div>
    </div>
  );
}

export default App;
