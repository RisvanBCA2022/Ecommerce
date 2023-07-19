import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import Hero from '../Hero';
import Products from './Products';
import { heroapi } from '../../data/data';
import Recommended from './Recommended';
import Men from './Men';
import { Navbar } from 'react-bootstrap';
import Footer from './Footer';

function Home() {

  return (
    <div>
      <Recommended />
      
      <Hero heroapi={heroapi} />
      <br />
      <br />
      <br />
      <br />
      <br />
      
          <Products />
          <Footer />
        
      
    </div>
  );
}

export default Home;
