import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [bannerData, setBannerData] = useState({
    description: '',
    timer: 0,
    link: '',
  });

  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    fetchBannerData();
  }, []);

  const fetchBannerData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/banner');
      const data = response.data;

      if (data.timer > 0) {
        setBannerData(data);
        setIsBannerVisible(true);
      } else {
        resetBannerData();
      }
    } catch (error) {
      console.error('Error fetching banner data:', error);
      resetBannerData(); // Reset in case of error
    }
  };

  const resetBannerData = () => {
    setBannerData({
      description: '',
      timer: 0,
      link: '',
    });
    setIsBannerVisible(false);
  };

  const updateBannerData = async (newData) => {
    try {
      await axios.post('http://localhost:5000/api/banner', newData);
      setBannerData(newData);
      setIsBannerVisible(true); // Show the banner after update
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
          <Banner
            {...bannerData}
            isBannerVisible={isBannerVisible}
            setIsBannerVisible={setIsBannerVisible}
          />
          <Dashboard bannerData={bannerData} updateBannerData={updateBannerData} />
        </main>
      </div>
    </Router>
  );
}

export default App;
