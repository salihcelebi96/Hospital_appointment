import React from 'react';
import { Link } from 'react-router-dom';
import "../css/navbar.css"
import {BiHealth} from 'react-icons/bi'; 
const Navbar: React.FC = () => {

  return (
    <div>
         <div className='flex   w-screen gap-4 items-center'>
            <Link to="/"> <BiHealth  size={50} color="blue" /></Link>
             <Link to="/" className='text-3xl text-blue-700 font-serif'>Hayat Hospital</Link>  
             
             
        </div>
      <nav className='w-screen'>
        <ul className='flex justify-center gap-10  items-center  h-16 bg-blue-700 text-white lg:text-2xl  sm:text-xl'>
          <li>
            <Link className="navbar-link" to="/">Anasayfa</Link>
          </li>
          <li>
            <Link className="navbar-link" to="/doctors">Doktorlar</Link>
          </li>
          <li>
            <Link className="navbar-link" to="/about">Hakkımızda</Link>
          </li>
          <li>
            <Link className="navbar-link" to="/randevu">Randevularım</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
