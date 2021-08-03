import React, { useState } from 'react';
import { Menuitem } from './MenuItem';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const funcState = () => {
    return setNavState(!navState);
  };
  return (
    // <> Fragments
    <>
      <Router>
        <nav className="navbarSelf">
          <div className="navbar-brandSelf">BUS BOOKINGZ</div>
          <ul className="navSelf">
            {Menuitem.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href={item.url}
                    className={
                      navState ? 'nav-linkSelf active' : 'nav-linkSelf'
                    }
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <span class="ham" onClick={funcState}>
            #
          </span>
        </nav>
      </Router>
    </>
  );
};

export default Navbar;