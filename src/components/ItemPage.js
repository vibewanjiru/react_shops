import React from 'react';
import { useParams } from 'react-router-dom';
import './ItemPage.css';

const items = {
  1: { id: 1, name: 'Item A1', image: 'item-a1.jpg', description: 'Description of Item A1' },
  2: { id: 2, name: 'Item A2', image: 'item-a2.jpg', description: 'Description of Item A2' },
  3: { id: 3, name: 'Item A3', image: 'item-a3.jpg', description: 'Description of Item A3' },
  4: { id: 4, name: 'Item A4', image: 'item-a4.jpg', description: 'Description of Item A4' },
  5: { id: 5, name: 'Item A5', image: 'item-a5.jpg', description: 'Description of Item A5' },
  6: { id: 6, name: 'Item A6', image: 'item-a6.jpg', description: 'Description of Item A6' },
  7: { id: 7, name: 'Item B1', image: 'item-b1.jpg', description: 'Description of Item B1' },
  8: { id: 8, name: 'Item B2', image: 'item-b2.jpg', description: 'Description of Item B2' },
  9: { id: 9, name: 'Item B3', image: 'item-b3.jpg', description: 'Description of Item B3' },
  10: { id: 10, name: 'Item B4', image: 'item-b4.jpg', description: 'Description of Item B4' },
  11: { id: 11, name: 'Item B5', image: 'item-b5.jpg', description: 'Description of Item B5' },
  12: { id: 12, name: 'Item B6', image: 'item-b6.jpg', description: 'Description of Item B6' },
  13: { id: 13, name: 'Item C1', image: 'item-c1.jpg', description: 'Description of Item C1' },
  14: { id: 14, name: 'Item C2', image: 'item-c2.jpg', description: 'Description of Item C2' },
  15: { id: 15, name: 'Item C3', image: 'item-c3.jpg', description: 'Description of Item C3' },
  16: { id: 16, name: 'Item C4', image: 'item-c4.jpg', description: 'Description of Item C4' },
  17: { id: 17, name: 'Item C5', image: 'item-c5.jpg', description: 'Description of Item C5' },
  18: { id: 18, name: 'Item C6', image: 'item-c6.jpg', description: 'Description of Item C6' },
};

const ItemPage = () => {
  const { itemId } = useParams();
  const item = items[itemId];

  if (!item) {
    return <h2>Item not found</h2>;
  }

  return (
    <div className="item-page">
      <img src={item.image} alt={item.name} className="item-detail-image" />
      <div className="item-detail-info">
        <h1>{item.name}</h1>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default ItemPage;
