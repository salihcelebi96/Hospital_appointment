import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='h-40    flex flex-col justify-center items-center bg-blue-700 mt-10'>
      <div className=' text-white'>
      <h1 className='text-3xl '>Hayat Hastanesi</h1>
      </div>
      <div className='text-white  text-sm py-5 px-5'>
       <p> Web sitemizde bulunan tüm görsellerin,işitsel veya içerik bilgilerinin izinsiz kullanılması yasaktır.Durumun tespit edilmesi halinde hukuki yollara başvurulacaktır.</p> 
      </div>
    </footer>
  );
}

export default Footer;
