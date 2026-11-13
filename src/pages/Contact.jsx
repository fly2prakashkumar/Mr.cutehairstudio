import React from 'react';
import { ArrowUpRight, MapPin, Phone, Clock3 } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import { salon } from '../data.js';

function Contact(){return <><PageHero kicker="COME ON IN" title={<>Let's get you<br/><em>looking sharp.</em></>} sub="Questions, directions or a quick booking enquiry? Get in touch."/><section className="section"><div className="container contact-grid"><div className="contact-details"><div><MapPin/><span><b>Visit us</b>{salon.address}</span></div><div><Phone/><span><b>Call the studio</b><a href={`tel:+${salon.phone}`}>{salon.displayPhone}</a></span></div><div><Clock3/><span><b>Opening hours</b>{salon.hours}</span></div><a className="btn btn-gold" href={`https://wa.me/${salon.phone}`} target="_blank" rel="noreferrer">Chat on WhatsApp <ArrowUpRight size={16}/></a><a className="text-link" href="https://www.google.com/maps/dir/?api=1&destination=13.2834107,79.4832638" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={16}/></a></div><div className="map-placeholder map-embed"><iframe title="Mr.Cute Hair Studio location map" src={salon.mapEmbed} width="100%" height="420" style={{border:0}} loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/></div></div></section></>}

export default Contact;
