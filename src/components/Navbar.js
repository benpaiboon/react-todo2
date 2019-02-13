import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">Navbar</Link>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/photos">Photo</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/table">Table</Link></li>
          <li><Link to="/fctable">FcTable</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;