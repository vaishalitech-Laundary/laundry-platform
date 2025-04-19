// src/pages/Services/Services.jsx
import React from 'react';
import ServicesHero from './ServicesHero';
import ServicesOfferings from './ServicesOfferings';
import ServicesExclusiveOffer from './ServicesExclusiveOffer';
import ServicesFaqs from './ServicesFaqs';

const Services = () => {
  return (
    <div className="bg-white">
      <ServicesHero/>
      <ServicesOfferings/>
      <ServicesExclusiveOffer/>
      <ServicesFaqs/>
    </div>
  );
}

export default Services;
