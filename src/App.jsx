import React from 'react';
import MainPage from './Components/MainPage';
import Navbar from './Components/Navbar';
import Info from './Components/Info';
import Services from './Components/Services';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div className='font-Main'>
      <Navbar />
      <MainPage />
      <Info />
      <Services />
      <Contact />
    </div>
  )
}

export default App