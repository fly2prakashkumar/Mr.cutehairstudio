import React from 'react';
import PageHero from '../components/PageHero.jsx';

function Gallery(){const pics=[['Haircut details','photo-1621605815971-fbc98d665033'],['Classic barbering','photo-1503951914875-452162b0f3f1'],['Modern styling','photo-1599351431202-1e0f0137899a'],['Studio moments','photo-1512690459411-b9245aed614b']];return <><PageHero kicker="THE LOOKBOOK" title={<>Craft. Character.<br/><em>Confidence.</em></>} sub="A visual journal of the styles and details we love. Replace these sample images with your salon's own work."/><section className="section"><div className="container gallery-grid">{pics.slice(0,4).map(([t,id],i)=><div className="gallery-item" key={t}><img src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=85`} alt={t}/><span>0{i+1} / {t}</span></div>)}</div></section></>}

export default Gallery;
