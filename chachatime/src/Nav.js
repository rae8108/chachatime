import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Homepage from "./Homepage";
import Menupage from "./Menupage";
import Locationspage from "./Locationspage";
import './Nav.css';

export default function Nav() {
  return (
    <div>
    <div className="Nav">
    <div>
            <small className="name">chachatime</small>
        </div>
  <nav>
    <div><NavLink to="/">Home</NavLink></div>
    <div><NavLink to="/menu">Menu</NavLink></div>
    <div><NavLink to="/locations">Locations</NavLink></div>
  </nav>
</div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<Menupage />} />
        <Route path="/locations" element={<Locationspage />} />
      </Routes>
      </div>
   
  );
}
