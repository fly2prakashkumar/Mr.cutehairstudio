import React from 'react';
import { Scissors } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function Brand({ compact = false }) {
  return <Link className="brand" to="/" aria-label="Mr.Cute Hair Studio home"><span className="brand-mark"><Scissors size={compact ? 20 : 24}/></span><span><strong>Mr.Cute</strong><small>HAIR STUDIO</small></span></Link>;
}
