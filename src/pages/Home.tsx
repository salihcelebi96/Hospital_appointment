import React from 'react';
import Slick from "../components/slickHospital";
import Footer from "../components/Footer";

import Mom from "../assets/mom.jpg"
import { Link } from 'react-router-dom';



const Home: React.FC = () => {
  return (
    <div>
       <img  src={Mom} alt="" />
       <Slick/>
       <Footer/>
    </div>
  );
}

export default Home;
