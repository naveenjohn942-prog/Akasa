// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from './component/Register';
import InventoryList from './component/InventoryList';
import LandingPage from './component/index';
import './index.css';
import Home from './component/Home';
import { DataProvider } from './context/DataContext';
// import Navbar from './component/navbar';

function App() {
  return (
    <Router>
      <DataProvider>
      <div>
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/inventory" element={<InventoryList />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>

      </DataProvider>

    </Router>
  );
}

export default App;
