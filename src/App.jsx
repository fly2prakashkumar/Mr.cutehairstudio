import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Pricing from './pages/Pricing.jsx';
import Gallery from './pages/Gallery.jsx';
import About from './pages/About.jsx';
import Team from './pages/Team.jsx';
import Contact from './pages/Contact.jsx';
import Booking from './pages/Booking.jsx';
import Admin from './admin/Admin.jsx';
export default function App(){return <Routes><Route path="/admin" element={<Admin/>}/><Route element={<Layout/>}><Route index element={<Home/>}/><Route path="services" element={<Services/>}/><Route path="pricing" element={<Pricing/>}/><Route path="gallery" element={<Gallery/>}/><Route path="about" element={<About/>}/><Route path="team" element={<Team/>}/><Route path="contact" element={<Contact/>}/><Route path="booking" element={<Booking/>}/><Route path="*" element={<Home/>}/></Route></Routes>}
