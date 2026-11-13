import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Instagram, MapPin, Phone } from 'lucide-react';
import Brand from './Brand.jsx';
import { salon } from '../data.js';

const links = [['Home','/'],['Services','/services'],['Pricing','/pricing'],['Gallery','/gallery'],['About','/about'],['Team','/team'],['Contact','/contact']];
export default function Layout() {
  const [open, setOpen] = useState(false);
  const wa = `https://wa.me/${salon.phone}`;
  return <><header className="site-header"><div className="container nav-wrap"><Brand/><button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button><nav className={open ? 'nav-links open' : 'nav-links'}>{links.map(([label,path])=><NavLink key={path} to={path} end={path==='/'} onClick={()=>setOpen(false)}>{label}</NavLink>)}<Link className="btn btn-gold nav-book" to="/booking" onClick={()=>setOpen(false)}>Book Appointment <ArrowUpRight size={16}/></Link></nav></div></header><main><Outlet/></main><footer className="footer"><div className="container footer-grid"><div><Brand/><p className="muted footer-copy">A sharper look. A better feeling. Premium men's grooming in {salon.location}.</p></div><div><h4>Explore</h4>{links.slice(1,5).map(([n,p])=><Link key={p} to={p}>{n}</Link>)}</div><div><h4>Visit the studio</h4><p><MapPin size={15}/> {salon.address}</p><p><Phone size={15}/> {salon.displayPhone}</p><p>{salon.hours}</p></div><div><h4>Appointments</h4><p className="muted">Reserve your preferred time with our team.</p><Link className="text-link" to="/booking">Book your visit <ArrowUpRight size={15}/></Link><a className="text-link" href={wa} target="_blank" rel="noreferrer"><Instagram size={15}/> Social links to be added</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Mr.Cute Hair Studio. All rights reserved.</span><Link to="/admin">Staff / Admin</Link></div></footer></>;
}
