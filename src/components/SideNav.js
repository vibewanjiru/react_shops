import React from 'react';
import './SideNav.css';

const SideNav = () => {
  return (
    <div className="side-nav">
      <h2>Shops</h2>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/shop/1">Shop A</a></li>
        <li><a href="/shop/2">Shop B</a></li>
        <li><a href="/shop/3">Shop C</a></li>
      </ul>
    </div>
  );
};

export default SideNav;
