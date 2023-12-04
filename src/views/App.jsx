
import './App.css'
import React from "react";

import { BrowserRouter } from 'react-router-dom';

import Menu from "../components/Menu"
import Content from "../components/Content"

const App = poprs => 

(
<div className="App">
    <BrowserRouter>
        <Menu />
        <Content />
    </BrowserRouter>

</div>
);

export default App;