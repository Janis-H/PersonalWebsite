import React from 'react';

import NavButton from '../components/NavButton.jsx';

const Navbar = () => {
  return (
    <nav id="navbar">
      <NavButton name="Home"/>
      <div className="flex-container"></div>
    </nav>
  );
};

export default Navbar;
