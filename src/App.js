import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Furniture Store</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<div>Каталог</div>} />
            <Route path="/product/:id" element={<div>Карточка товара</div>} />
            <Route path="/cart" element={<div>Корзина</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;