import React from "react";
import SideNav from "../components/SideNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cursor from '../components/Cursor';
import About  from "../pages/About";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";

const Router = () => {
  return (
    <BrowserRouter>
    <Cursor />
    <SideNav />
      <Routes>
        <Route exact path="/" element= {<About />} />
        <Route path="/Skills" element= {<Skills />} />
        <Route path="/Contact" element= {<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;



