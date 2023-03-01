import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Page/Home";
import Login from "./Page/Login";
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider
        clientId='40694529486-49gjidk0bmff287alh4lf7seu592mv5p.apps.googleusercontent.com'
        >
         <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      </GoogleOAuthProvider>
     
    </div>
  );
}

export default App;
