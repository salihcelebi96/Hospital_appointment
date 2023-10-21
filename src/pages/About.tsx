import React, { useState } from 'react';
import Footer from "../components/Footer";
import team1 from "../assets/team/team1.jpg";
import team2 from "../assets/team/team2.jpg";
import team3 from "../assets/team/team3.jpg";
import hastane1 from "../assets/hastaneler/hastane1.jpg";
import hastane2 from "../assets/hastaneler/hastane2.jpg";
import hastane3 from "../assets/hastaneler/hastane3.jpg";
import hastane4 from "../assets/hastaneler/hastane4.jpg";
import hastane5 from "../assets/hastaneler/hastane5.jpg";
import "../css/about.css";
import ScrollToTopButton from '../components/scrollToTop';

const About: React.FC = () => {
  const hastaneler = [ hastane5 ,hastane2, hastane3, hastane4,hastane1];
  const years = [2008, 2012, 2015, 2019, 2022];
  const [displayedHospitals, setDisplayedHospitals] = useState<string | null>(hastane5);

  const handleYearClick = (selectedYear: number) => {
    const yearIndex = years.indexOf(selectedYear);

    if (yearIndex !== -1) {
      setDisplayedHospitals(hastaneler[yearIndex]);
    } else {
      setDisplayedHospitals(null);
    }
  };

  return (
    <div className='my-5'>
      <div className="text-center mt-5 text-2xl">
        Yönetim Kurulu
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 justify-center">
        <div className="m-4 w-[500px]">
          <img src={team1} alt="Team Member 1" />
          <div className='flex flex-col items-center gap-1 mt-2'>
            <p className=''>Gizem Çoban</p>
            <p>Yönetim Kurulu Üyesi</p>
            <p className='word-spacing-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas varius, sapien vel rhoncus convallis, mi tortor scelerisque lectus,
              et tincidunt justo quam eget justo. Fusce dignissim auctor sem, et bibendum mi. Vivamus id urna at orci condimentum facilisis. Nulla euismod risus vitae consectetur eleifend. Aliquam erat volutpat. Sed luctus convallis sem. Phasellus at lacus nec eros imperdiet luctus.
              icies aliquet. Etiam eu neque at libero scelerisque facilisis a sed arcu.</p>
          </div>
        </div>
        <div className="m-4 w-[500px]">
          <img src={team3} alt="Team Member 1" />
          <div className='flex flex-col items-center gap-1 mt-2'>
            <p className=''>Ahmet Çoban</p>
            <p>Yönetim Kurulu Başkanı</p>
            <p className='word-spacing-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas varius, sapien vel rhoncus convallis, mi tortor scelerisque lectus,
              et tincidunt justo quam eget justo. Fusce dignissim auctor sem, et bibendum mi. Vivamus id urna at orci condimentum facilisis. Nulla euismod risus vitae consectetur eleifend. Aliquam erat volutpat. Sed luctus convallis sem. Phasellus at lacus nec eros imperdiet luctus.
              icies aliquet. Etiam eu neque at libero scelerisque facilisis a sed arcu.</p>
          </div>
        </div>
        <div className="m-4 w-[500px]">
          <img src={team2} alt="Team Member 1" />
          <div className='flex flex-col items-center gap-1 mt-2'>
            <p className=''>Veli Çoban</p>
            <p>Yönetim Kurulu Üyesi</p>
            <p className='word-spacing-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas varius, sapien vel rhoncus convallis, mi tortor scelerisque lectus,
              et tincidunt justo quam eget justo. Fusce dignissim auctor sem, et bibendum mi. Vivamus id urna at orci condimentum facilisis. Nulla euismod risus vitae consectetur eleifend. Aliquam erat volutpat. Sed luctus convallis sem. Phasellus at lacus nec eros imperdiet luctus.
              icies aliquet. Etiam eu neque at libero scelerisque facilisis a sed arcu.</p>
          </div>
        </div>
      </div>
      <div className='w-screen'>
        <div className='relative h-[400px] my-10 flex justify-center w-full'>
          <img className='h-full w-full inset-0 bg-blue-500 opacity-70' src={hastane3} alt="" />
          <div id='hastanelerimiz' className='h-full pt-10 text-center text-5xl font-bold text-white absolute top-1/2 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center'>Hastanelerimiz ve Tıp Merkezlerimiz</div>
        </div>
        <div className=' flex flex-col items-center'>
          <div className='flex gap-10 h-10 '>
            <button onClick={() => handleYearClick(2008)}>2008</button>
            <button onClick={() => handleYearClick(2012)}>2012</button>
            <button onClick={() => handleYearClick(2015)}>2015</button>
            <button onClick={() => handleYearClick(2019)}>2019</button>
            <button onClick={() => handleYearClick(2022)}>2022</button>
          </div>
          {displayedHospitals !== null ? (
            <div className="grid grid-cols-1 gap-5 px-4 ">
              <div className='flex'>
                <img className='h-96 w-[700px]' src={displayedHospitals} alt={`Hastane`} />
              </div>
            </div>
          ) : (
            <p>Seçilen yıl için hastane bulunamadı.</p>
          )}
        </div>
      </div>
      <div className='relative'>
        <div className=''>
          <Footer/>
        </div>
        <div className=' text-white left-4  absolute top-1'>
          <ScrollToTopButton/>
        </div>
        
      </div>
      

    </div>
  );
}

export default About;
