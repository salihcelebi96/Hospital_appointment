import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Kullanıcı sayfayı aşağı kaydırdıkça isVisible durumunu güncelle
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Sayfa yüklendiğinde ve her sayfa kaydırıldığında kaydırma işlevselliğini takip et
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Sayfayı en üstüne kaydıran işlev
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Yavaşça kaydır
    });
  };

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top-button bg-white text-black px-1 border rounded-tl-xl rounded-br-xl ">
          Yukarı
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
