import React from 'react';
import './Sidebar.css'

import { NavLink } from 'react-router-dom';

function Sidebar (){
    return(
        <div className="Sidebar">
      <header>
        <div className="Sidebar-Main">Goldie <br/>Aboutorabi</div>
        <div className="Sidebar-Subtitle">
        </div>

        <div className="Sidebar-Area">
          <NavLink className="nav-link" activeClassName="nav-link-active" exact to="/">Portfolio</NavLink><br />
          <NavLink className="nav-link" activeClassName="nav-link-active" to="/about">About</NavLink><br />
          <NavLink className="nav-link" activeClassName="nav-link-active" to="/contact">Contact</NavLink><br />
        </div>

      </header>
    </div>
    )
}

export default Sidebar