import React from 'react';
import { Link } from 'react-router-dom';
import "../css/navbar.css"
import {BiHealth} from 'react-icons/bi'; 
const Navbar: React.FC = () => {

  return (
    <div>
         <div className='flex gap-4 items-center'>
            <Link to="/"> <BiHealth  size={50} color="blue" /></Link>
             <Link to="/" className='text-3xl text-blue-600 font-serif'>Hayat Hospital</Link>  
             
             
        </div>
      <nav>
        <ul className='flex justify-center items-center gap-10 h-16 bg-blue-600 text-white text-2xl'>
          <li>
            <Link className="navbar-link" to="/">Anasayfa</Link>
          </li>
          <li>
            <Link className="navbar-link" to="/doctors">Doktorlar</Link>
          </li>
          <li>
            <Link className="navbar-link" to="/about">Hakkımızda</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
