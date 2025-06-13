import { useState, useEffect } from 'react';
import Header from './Header';
import Banner from './Banner';

const HeaderWithBanner = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = Math.min(scrollY / 150, 1);
  const isScrolled = opacity > 0.6;

  return (
    <>
      {/* Зарезервировать место: TopBanner (40px) + HeaderWithBanner (20vh) */}
      <div className="h-[calc(40px+20vh)]" />

      {/* Сдвинуть HeaderWithBanner под TopBanner */}
      <div className="fixed top-[40px] left-0 w-full z-40">
        <div
          className="w-full transition-all duration-500"
          style={{
            background: `linear-gradient(to bottom, rgba(255,255,255,${opacity}), rgba(255,255,255,${opacity}))`,
          }}
        >
          <Header isScrolled={isScrolled} />
          <Banner isScrolled={isScrolled} />
        </div>
      </div>
    </>
  );
};

export default HeaderWithBanner;
