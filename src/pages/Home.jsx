import HomePage from './HomePage';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Фиксированный баннер */}
      <div className="bg-pink-500 text-white text-center p-2 text-sm sm:text-base shadow-md fixed top-0 left-0 right-0 z-50">
        💓 livraison gratuite à partir de 40€ 💓
      </div>

      {/* Контент с отступом от баннера + хедера */}
      <div className="pt-[128px] sm:pt-[136px]">
        <HomePage />

        <div className="bg-white/90 p-4 sm:p-6 md:p-8 rounded shadow-md max-w-md sm:max-w-xl mx-auto mt-10">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-4">
            Добро пожаловать в наш магазин!
          </h1>
          <p className="text-sm sm:text-base text-gray-700 text-center">
            Здесь будет каталог товаров или другая информация для покупателей.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

