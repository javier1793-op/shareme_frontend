import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Page/Home";
import Login from "./Page/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
