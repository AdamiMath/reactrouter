
import './Menu.css'
import React from "react";

import { Link } from 'react-router-dom';


const Menu = poprs => (
<aside className="Menu">
    <nav>
        <ul>
            <li>
            <Link to="/">Início</Link>
            </li>
            <li>
            <Link to="/about">Sobre</Link>
            </li>
            <li>
            <Link to="/param/1">Param #01</Link>
            </li>
            <li>
            <Link to="/param/2">Param #02</Link>
            </li>
            <li>
            <Link to="/NotFound">Não Existe</Link>
            </li>
        </ul>
    </nav>
</aside>
)

export default Menu;