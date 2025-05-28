
import { NavLink } from 'react-router-dom';
import React from 'react';
import headshot from '../assets/headshot.jpg';

function ProHeader() {
    return (
        <header>
            <NavLink
                to="/"
                style={{ textDecoration: 'none', color: 'black' }}>

        <div id="head">
          <img src={headshot} alt="Headshot of Avionte Williams" />
          <h1>
            <strong>
              AVIONTE WILLIAMS<br />
              FULLSTACK SOFTWARE ENGINEER
            </strong>
          </h1>
        </div>
                </NavLink>
  
        <nav>
          <ul>
            <li><NavLink to="/stack">Stack</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </header>
    );
}

export default ProHeader;