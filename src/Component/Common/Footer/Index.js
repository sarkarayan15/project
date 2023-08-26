import React  from "react";
import Main from "./Components/Main";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Privacy from "./Components/Privacy";

const Footer = () => {
    return(
        <div>
            <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contactus" element={<ContactUs />} />
                    <Route path="/privacy" element={<Privacy />} />
                  </Routes>
            </BrowserRouter>
        </div>
        )
}

export default Footer;