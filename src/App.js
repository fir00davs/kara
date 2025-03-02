import React from 'react';
import styles from './App.css';
import Header from './components/Header';
import WhyUs from './components/WhyUs';
import TruckList from './components/TruckList';
import ForkliftRental from './components/ForkliftRental';
import Reviews from './components/Reviews';
import Main from './components/main';
import Login from './components/login';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <h1 className='why-title'>Почему мы ?</h1>
      <WhyUs />
      <TruckList />
      <ForkliftRental />
      <Reviews />
      <Login />
      <Footer />
    </div>
  );
}

export default App;