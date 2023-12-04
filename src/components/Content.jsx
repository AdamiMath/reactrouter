import './Content.css'
import React from "react";
import { Routes, Route } from "react-router-dom";


import About from "../views/exemples/About";
import Home from "../views/exemples/Home";
import Param from "../views/exemples/Param";
import NotFound from '../views/exemples/NotFound';





const Content = poprs => 

(
<main className="Content">

<Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/param/:id" element={<Param />} />
        <Route exact path="*" element={<NotFound />} />

 
     
    </Routes>
</main>
);

export default Content;