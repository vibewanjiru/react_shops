import React from 'react';
import { Link } from 'react-router-dom';
import './ShopList.css';

const shops = [
  { id: 1, name: 'Shop A', image: 'shop-a.jpg' },
  { id: 2, name: 'Shop B', image: 'shop-b.jpg' },
  { id: 3, name: 'Shop C', image: 'shop-c.jpg' },
];

const ShopList = () => {
  return (
    <div className="shop-list">
      {shops.map((shop) => (
        <Link to={`/shop/${shop.id}`} key={shop.id} className="shop-card">
          <img src={shop.image} alt={shop.name} className="shop-image" />
          <h2 className="shop-title">{shop.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default ShopList;
