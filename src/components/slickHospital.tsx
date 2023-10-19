import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hastane1 from "../assets/hastaneler/hastane1.jpg";
import hastane2 from "../assets/hastaneler/hastane2.jpg";
import hastane3 from "../assets/hastaneler/hastane3.jpg";
import hastane4 from "../assets/hastaneler/hastane4.jpg";
import hastane5 from "../assets/hastaneler/hastane5.jpg";

const SimpleSlider = () => {
  const hastaneler = [hastane1, hastane2, hastane3, hastane4, hastane5];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
          breakpoint: 768, 
          settings: {
            slidesToShow: 1, 
          },
        },
      ],
  };

  return (
    <div>
        <h1 className="text-3xl text-center font-serif my-2">Hastaneler</h1>
        <Slider {...settings}>
        
        {hastaneler.map((hastane, index) => (
          <div className="lg:h-80 sm:h-40 p-5" key={index}>
            <img src={hastane} alt={`Hastane ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
    
  );
};

export default SimpleSlider;
