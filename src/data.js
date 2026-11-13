export const salon = {
  name: 'Mr.Cute Hair Studio',
  location: 'Podhaturpet',
  phone: '916379978394',
  displayPhone: '+91 6379978394',
  address: 'Mr.Cute Hair Studio, Podhaturpet, Tamil Nadu, India',
  hours: 'Every day · 8:00 AM – 10:00 PM',
  openingHour: 8,
  closingHour: 22,
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.072487114917!2d79.4832638!3d13.283410699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52a97f017395bf%3A0x7ebe174ec3ae397f!2sMr.cute%20hair%20studio!5e0!3m2!1sen!2sin!4v1794555221796!5m2!1sen!2sin',
  barbers: ['Surya', 'Chandru'],
};

export const services = [
  { id: 'haircut', name: 'Haircut', category: 'Hair', price: 130, duration: '30 min', description: 'A neat, tailored haircut to suit your style.', image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=85' },
  { id: 'beard', name: 'Beard Trim', category: 'Beard', price: 50, duration: '30 min', description: 'A clean, well-shaped beard with sharp finishing.', image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85' },
  { id: 'shaving', name: 'Shaving', category: 'Shaving', price: 60, duration: '30 min', description: 'A comfortable clean shave and fresh finish.', image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=900&q=85' },
];

export const readBookings = () => JSON.parse(localStorage.getItem('mrCuteBookings') || '[]');
export const saveBookings = (items) => localStorage.setItem('mrCuteBookings', JSON.stringify(items));
export const money = (amount) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);

export const getLocalDateString = (date = new Date()) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const appointmentSlots = Array.from({ length: 28 }, (_, index) => {
  const totalMinutes = openingHourMinutes() + index * 30;
  const hour24 = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const hour12 = hour24 % 12 || 12;
  return `${hour12}:${String(minutes).padStart(2, '0')} ${hour24 >= 12 ? 'PM' : 'AM'}`;
});
function openingHourMinutes() { return salon.openingHour * 60; }
