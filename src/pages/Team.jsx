import React from 'react';
import PageHero from '../components/PageHero.jsx';
import { salon } from '../data.js';

function Team(){return <><PageHero kicker="THE PEOPLE BEHIND THE CUT" title={<>Good hands.<br/><em>Great style.</em></>} sub="Meet the barbers and stylists who make your visit. Add real team profiles and photos before launch."/><section className="section"><div className="container team-grid">{salon.barbers.map((person,i)=><div className="team-card" key={person}><div className="team-placeholder">MC<span>0{i+1}</span></div><h3>{person}</h3><p>Barber · Men's grooming</p></div>)}</div></section></>}

export default Team;
