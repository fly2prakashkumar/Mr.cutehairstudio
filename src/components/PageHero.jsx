import React from 'react';

export default function PageHero({ kicker, title, sub }) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow gold-text">{kicker}</span>
        <h1>{title}</h1>
        {sub && <p>{sub}</p>}
      </div>
    </section>
  );
}
