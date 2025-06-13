

import TopBanner from '../components/TopBanner';
import HomePage from './HomePage';
import FeaturedProducts from '../components/FeaturedProducts';
import HomeLinkSection from '../components/HomeLinkSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-pink-50">
      {/* Розовый баннер всегда сверху */}
      <TopBanner />

      {/* Контент с отступом под розовый баннер (примерно 32px) */}
      <div className="pt-[40px] sm:pt-[40px]">
        <HomePage />
        <FeaturedProducts />
        <HomeLinkSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;