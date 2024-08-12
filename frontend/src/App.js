import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [bannerData, setBannerData] = useState({
    isVisible: false,
    description: '',
    timer: 0,
    link: '',
  });

  useEffect(() => {
    fetchBannerData();
  }, []);

  const fetchBannerData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/banner');
      setBannerData(response.data);
    } catch (error) {
      console.error('Error fetching banner data:', error);
    }
  };

  const updateBannerData = async (newData) => {
    try {
      await axios.post('http://localhost:5000/api/banner', newData);
      setBannerData(newData); // Immediately update the state
    } catch (error) {
      console.error('Error updating banner data:', error);
    }
  };

  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Dynamic One-Page Website</h1>
        </header>
        <main className="app-main">
          {bannerData.isVisible && <Banner {...bannerData} />}
          <Dashboard bannerData={bannerData} updateBannerData={updateBannerData} />
        </main>
      </div>
    </Router>
  );
}

export default App;