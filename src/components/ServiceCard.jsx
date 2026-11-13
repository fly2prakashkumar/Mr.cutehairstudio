import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { money } from '../data.js';
export default function ServiceCard({ service }) { return <article className="service-card"><div className="service-image"><img src={service.image} alt={service.name} loading="lazy"/><span className="service-category">{service.category}</span></div><div className="service-info"><div><h3>{service.name}</h3><p>{service.description}</p></div><div className="service-meta"><span>From <b>{money(service.price)}</b></span><span>{service.duration}</span></div><Link className="service-link" to={`/booking?service=${service.id}`}>Book this service <ArrowUpRight size={16}/></Link></div></article>; }
