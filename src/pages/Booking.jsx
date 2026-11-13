import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import { services, salon, money, readBookings, saveBookings, appointmentSlots, getLocalDateString } from '../data.js';

function Booking(){
  const [params]=useSearchParams();
  const initial=params.get('service')||'haircut';
  const [service,setService]=useState(initial);
  const [barber,setBarber]=useState('Any available barber');
  const [date,setDate]=useState('');
  const [time,setTime]=useState('');
  const [name,setName]=useState('');
  const [customerPhone,setCustomerPhone]=useState('');
  const [note,setNote]=useState('');
  const [done,setDone]=useState(null);
  const chosen=services.find(s=>s.id===service)||services[0];
  function submit(e){
    e.preventDefault();
    const booking={id:Date.now(),name,phone:customerPhone,service:chosen.name,serviceId:chosen.id,price:chosen.price,barber,date,time,note,status:'Pending',createdAt:new Date().toISOString()};
    saveBookings([booking,...readBookings()]);
    setDone(booking);
    const message=`Hello Mr.Cute Hair Studio, I would like to request an appointment.\nName: ${name}\nCustomer phone: ${customerPhone}\nService: ${chosen.name}\nPrice: ${money(chosen.price)}\nBarber: ${barber}\nDate: ${date}\nTime: ${time}\nNote: ${note||'None'}`;
    window.open(`https://wa.me/${salon.phone}?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer');
  }
  return <><PageHero kicker="RESERVE YOUR CHAIR" title={<>Your time.<br/><em>Your style.</em></>} sub="Choose your service, barber, date and a 30-minute appointment slot."/><section className="section"><div className="container booking-layout">{done?<div className="success-panel"><CheckCircle2 size={42}/><span className="eyebrow gold-text">REQUEST SAVED</span><h2>Thank you, {done.name}.</h2><p>Your request for {done.service} with {done.barber} on {done.date} at {done.time} has been saved in this browser. WhatsApp will open with your booking details; the salon will confirm the appointment.</p><button className="btn btn-gold" onClick={()=>{setDone(null);setDate('');setTime('');}}>Make another booking</button></div>:<form className="booking-form" onSubmit={submit}><div className="form-heading"><span className="eyebrow gold-text">APPOINTMENT DETAILS</span><h2>Book your visit</h2><p>Open daily from 8:00 AM to 10:00 PM. Slots are every 30 minutes.</p></div><label>Choose a service *</label><select value={service} onChange={e=>setService(e.target.value)}>{services.map(s=><option value={s.id} key={s.id}>{s.name} — {money(s.price)}</option>)}</select><label>Preferred barber *</label><select value={barber} onChange={e=>setBarber(e.target.value)}><option>Any available barber</option>{salon.barbers.map(person=><option key={person}>{person}</option>)}</select><div className="form-two"><div><label>Date *</label><input type="date" min={getLocalDateString()} value={date} onChange={e=>{setDate(e.target.value);setTime('');}} required/></div><div><label>Appointment time *</label><select value={time} onChange={e=>setTime(e.target.value)} required><option value="">Select a time</option>{appointmentSlots.map(t=><option key={t}>{t}</option>)}</select></div></div><div className="form-two"><div><label>Your name *</label><input value={name} onChange={e=>setName(e.target.value)} placeholder="Full name" required/></div><div><label>Your mobile number *</label><input value={customerPhone} onChange={e=>setCustomerPhone(e.target.value)} placeholder="10-digit mobile number" inputMode="tel" pattern="[0-9+ -]{10,15}" required/></div></div><label>Anything we should know?</label><textarea value={note} onChange={e=>setNote(e.target.value)} rows="3" placeholder="Style preference or special request (optional)"/><button className="btn btn-gold submit-btn" type="submit">Send booking request <ArrowUpRight size={17}/></button><small className="form-note">This version saves requests in this browser and opens WhatsApp. Slot availability is not yet checked across devices; the salon must confirm each request.</small></form>}<aside className="booking-summary"><span className="eyebrow gold-text">YOUR SELECTION</span><h3>{chosen.name}</h3><p>{chosen.description}</p><div className="summary-line"><span>Duration</span><b>{chosen.duration}</b></div><div className="summary-line"><span>Price</span><b>{money(chosen.price)}</b></div><div className="summary-total"><span>Estimated total</span><strong>{money(chosen.price)}</strong></div><div className="summary-line"><span>Barbers</span><b>Surya · Chandru</b></div><div className="summary-line"><span>Hours</span><b>8 AM – 10 PM</b></div><p className="muted">Your selected time is a request until the salon confirms it.</p></aside></div></section></>;
}

export default Booking;
