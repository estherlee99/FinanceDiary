import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import AssetManagement from './components/AssetManagement/AssetManagement';
import Home from './components/Home/Home';
import About from './components/About/About';
import NewsFeed from './components/Newsfeed/NewsFeed';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="app-container d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1" style={{ marginTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/assetmanagement" element={<AssetManagement />} />
            <Route path="/newsfeed" element={<NewsFeed />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
