import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';

function About(){return <><PageHero kicker="THE MR.CUTE APPROACH" title={<>A better kind of<br/><em>barber experience.</em></>} sub="Personal style, thoughtful service and a welcoming grooming space in Podhaturpet."/><section className="section"><div className="container split-feature"><div className="feature-photo"><img src="https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=1200&q=85" alt="Barber studio"/></div><div className="feature-copy"><span className="eyebrow gold-text">OUR PHILOSOPHY</span><h2>Precision in every<br/><em>detail.</em></h2><p>Mr.Cute Hair Studio is built around one simple idea: every customer deserves a look that feels right for them. From everyday cuts to special-occasion grooming, our focus is on care, consistency and comfort.</p><p className="muted">Add the salon's founding story, years of experience, product philosophy and team credentials here.</p><Link className="btn btn-gold" to="/booking">Visit us <ArrowUpRight size={16}/></Link></div></div></section></>}

export default About;
