import HomePage from './HomePage';
import FeaturedProducts from '../components/FeaturedProducts';
import HomeLinkSection from '../components/HomeLinkSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Фиксированный баннер */}
      <div className="bg-pink-300 text-white text-center p-2 text-sm sm:text-base shadow-md fixed top-0 left-0 right-0 z-50">
        💓 livraison gratuite à partir de 40€ 💓
      </div>

      {/* Контент с отступом от баннера + хедера */}
      <div className="pt-[128px] sm:pt-[136px]">
        <HomePage />
        <FeaturedProducts />
        <HomeLinkSection /> 
        <Footer />
        
      </div>
    </div>
  );
};

export default Home;

