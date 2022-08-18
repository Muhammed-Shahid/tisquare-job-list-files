import "./App.css";
import React from "react";
import { Routes, Route} from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.css";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import LandingPage from "./Pages/Landing Page/LandingPage";
import ApplyPage from "./Pages/Apply Page/ApplyPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ContactPage from "./Pages/ContactPage/ContactPage";



function App() {
 


  
  return (
    <div className="App">

      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route exact path="jobs" element={<ProductsPage/>} />
        <Route exact path="application" element={<ApplyPage/>} />
        <Route exact path="about" element={<AboutPage/>} />
        <Route exact path="contact" element={<ContactPage/>} />

        
      </Routes>
    </div>
  );
}

export default App;
