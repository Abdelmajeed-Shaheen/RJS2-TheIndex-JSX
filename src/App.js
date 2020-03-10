import React from "react";
import authors from "./data";
import Container from "./Container"
import SideBar from "./SideBar"

function App() {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <SideBar />
        <Container 
          authorsList={authors}
        />
      </div>
    </div>
  );
}


export default App;
