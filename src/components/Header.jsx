import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Heart, Search } from "lucide-react";

const Header = () => {
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("€");
  const [selectedLanguage] = useState("fr");

  return (
    <header className="fixed top-[40px] left-0 w-full z-40 bg-pink-100/80 backdrop-blur-md shadow-sm">
      <div className="w-full px-3 py-3 sm:px-4 sm:py-4 flex items-center justify-between">
        {/* 🌍 Язык и валюта */}
        <div className="relative flex items-center gap-2 text-base sm:text-xl text-pink-800">
          <span className="font-medium lowercase">{selectedLanguage}</span>
          <button
            className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center border-2 border-pink-600 rounded-full bg-transparent text-pink-600"
            onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
          >
            {selectedCurrency}
          </button>

          {isCurrencyOpen && (
            <div className="absolute left-0 mt-2 w-16 sm:w-20 bg-pink-50 shadow-lg rounded-md">
              <ul className="py-1">
                {["€", "$", "£"].map((currency) => (
                  <li key={currency}>
                    <button
                      className="block w-full text-center px-2 sm:px-4 py-1 hover:bg-pink-200 text-base sm:text-lg text-pink-600"
                      onClick={() => setSelectedCurrency(currency)}
                    >
                      {currency}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* 🔍 Навигация */}
        <div className="flex items-center gap-4 sm:gap-6 text-pink-800">
          <Link to="/wishlist" className="hover:text-pink-600">
            <Heart size={24} className="sm:size-7" />
          </Link>
          <Link to="/account" className="hover:text-pink-600">
            <User size={24} className="sm:size-7" />
          </Link>
          <Link to="/search" className="hover:text-pink-600">
            <Search size={24} className="sm:size-7" />
          </Link>
          <Link to="/cart" className="relative hover:text-pink-600">
            <ShoppingCart size={24} className="sm:size-7" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
