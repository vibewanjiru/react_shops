import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ShopPage.css';

const shops = {
  1: { id: 1, name: 'Shop A', items: [{ id: 1, name: 'Item A1', image: 'item-a1.jpg', description: 'Description of Item A1' }, { id: 2, name: 'Item A2', image: 'item-a2.jpg', description: 'Description of Item A2' }, { id: 3, name: 'Item A3', image: 'item-a3.jpg', description: 'Description of Item A3' }, { id: 4, name: 'Item A4', image: 'item-a4.jpg', description: 'Description of Item A4' }, { id: 5, name: 'Item A5', image: 'item-a5.jpg', description: 'Description of Item A5' }, { id: 6, name: 'Item A6', image: 'item-a6.jpg', description: 'Description of Item A6' }] },
  2: { id: 2, name: 'Shop B', items: [{ id: 7, name: 'Item B1', image: 'item-b1.jpg', description: 'Description of Item B1' }, { id: 8, name: 'Item B2', image: 'item-b2.jpg', description: 'Description of Item B2' }, { id: 9, name: 'Item B3', image: 'item-b3.jpg', description: 'Description of Item B3' }, { id: 10, name: 'Item B4', image: 'item-b4.jpg', description: 'Description of Item B4' }, { id: 11, name: 'Item B5', image: 'item-b5.jpg', description: 'Description of Item B5' }, { id: 12, name: 'Item B6', image: 'item-b6.jpg', description: 'Description of Item B6' }] },
  3: { id: 3, name: 'Shop C', items: [{ id: 13, name: 'Item C1', image: 'item-c1.jpg', description: 'Description of Item C1' }, { id: 14, name: 'Item C2', image: 'item-c2.jpg', description: 'Description of Item C2' }, { id: 15, name: 'Item C3', image: 'item-c3.jpg', description: 'Description of Item C3' }, { id: 16, name: 'Item C4', image: 'item-c4.jpg', description: 'Description of Item C4' }, { id: 17, name: 'Item C5', image: 'item-c5.jpg', description: 'Description of Item C5' }, { id: 18, name: 'Item C6', image: 'item-c6.jpg', description: 'Description of Item C6' }] }
};

const ShopPage = () => {
  const { shopId } = useParams();
  const shop = shops[shopId];
  const [searchQuery, setSearchQuery] = useState('');

  if (!shop) {
    return <h2>Shop not found</h2>;
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredItems = shop.items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="shop-page">
      <h1>{shop.name}</h1>
      <input
        type="text"
        placeholder="Search items..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="shop-search"
      />
      <div className="item-list">
        {filteredItems.map((item) => (
          <Link to={`/item/${item.id}`} key={item.id} className="item-card">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-info">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
