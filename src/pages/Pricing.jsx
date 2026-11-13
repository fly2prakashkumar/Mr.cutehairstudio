import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import { services, money } from '../data.js';

function Pricing(){return <><PageHero kicker="CLEAR, SIMPLE PRICING" title={<>Your next look.<br/><em>Your choice.</em></>} sub="Starting prices in Indian Rupees. Final pricing may vary by hair length, product and consultation."/><section className="section"><div className="container price-list">{services.map(s=><div className="price-row" key={s.id}><div><h3>{s.name}</h3><p>{s.duration} · {s.description}</p></div><strong>{money(s.price)}</strong><Link to={`/booking?service=${s.id}`} aria-label={`Book ${s.name}`}><ArrowUpRight/></Link></div>)}</div></section></>}

export default Pricing;
