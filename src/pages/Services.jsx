import React from 'react';
import PageHero from '../components/PageHero.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { services } from '../data.js';

function Services(){return <><PageHero kicker="THE SERVICE MENU" title={<>The details make<br/><em>the difference.</em></>} sub="Explore grooming services created around your look and your routine."/><section className="section"><div className="container"><div className="service-grid">{services.map(s=><ServiceCard key={s.id} service={s}/>)}</div></div></section></>}

export default Services;
