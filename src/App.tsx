import React from "react";
import "./App.css";
import NavbarCom from "./Navigation/NavbarCom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Heading from "./Pages/HeadlineRoute";

function App() {
  return (
    <div className="App">
      
      {/* <NavbarCom /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/heading" element={<Heading />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
