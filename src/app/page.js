// pages/index.js
"use client"

import Weather from '@/components/weather';
import React from 'react';
import './globals.css'


const Home = () => {
  return (
    <div className="Home">
   
     <Weather/>

     </div>
  );
};

export default Home;
