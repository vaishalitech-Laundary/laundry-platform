// src/pages/Services/Services.jsx
import React from 'react';
import ServicesHero from './ServicesHero';
import ServicesOfferings from './ServicesOfferings';
import ServicesExclusiveOffer from './ServicesExclusiveOffer';
import ServicesFaqs from './ServicesFaqs';
import ServicesNewsletter from './ServicesNewsletter';

const Services = () => {
  return (
    <div className="bg-white">
      <ServicesHero/>
      <ServicesOfferings/>
      <ServicesExclusiveOffer/>
      <ServicesFaqs/>
      <ServicesNewsletter/>
    </div>
  );
}

export default Services;
