// src/pages/Services/Services.jsx
import React from 'react';
import ServicesHero from './ServicesHero';
import ServicesOfferings from './ServicesOfferings';
import ServicesExclusiveOffer from './ServicesExclusiveOffer';

const Services = () => {
  return (
    <div className="bg-white">
      <ServicesHero/>
      <ServicesOfferings/>
      <ServicesExclusiveOffer/>
    </div>
  );
}

export default Services;
