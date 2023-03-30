import React from "react"
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Login from "./Login";
import Register from "./Register";
import Error from "./Error";

function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home />}/>
   <Route path="/AboutUs" element={<AboutUs />}/>
   <Route path="/Login" element={<Login />}/>
   <Route path="/Register" element={<Register />}/>
   <Route path="*" element={<Error />}/>
   </Routes>
   </BrowserRouter>
    
    
  );
}

export default App;
