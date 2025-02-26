import React from 'react';
import styles from './App.css';
import Header from './components/Header';
import WhyUs from './components/WhyUs';
import TruckList from './components/TruckList';
import ForkliftRental from './components/ForkliftRental';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="App">
      <Header />
      <WhyUs />
      <TruckList />
      <ForkliftRental />
      <Reviews />
    </div>
  );
}

export default App;