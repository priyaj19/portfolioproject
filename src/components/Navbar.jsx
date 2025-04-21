// components/Navbar.jsx
import React from 'react';

const Navbar = () => (
  <nav className="p-4 bg-gray-800 text-white flex justify-between">
    <h1 className="text-xl font-bold">My Portfolio</h1>
    <ul className="flex gap-4">
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;