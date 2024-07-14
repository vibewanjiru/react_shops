import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShopList from './components/ShopList';
import ShopPage from './components/ShopPage';
import ItemPage from './components/ItemPage';
import SideNav from './components/SideNav';
import AppBar from './components/AppBar';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <SideNav />
        <div className="main-content">
          <AppBar />
          <div className="content">
            <Routes>
              <Route path="/" element={<ShopList />} />
              <Route path="/shop/:shopId" element={<ShopPage />} />
              <Route path="/item/:itemId" element={<ItemPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
