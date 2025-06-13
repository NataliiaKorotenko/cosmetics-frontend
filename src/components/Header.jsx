import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Heart, Search } from "lucide-react";

const Header = ({ isScrolled }) => {
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("€");
  const [selectedLanguage] = useState("fr");

  return (
    <div className="w-full h-[64px] px-3 sm:px-4 flex items-center justify-between">

      {/* 🌍 Язык и валюта */}
      <div className="relative flex items-center gap-2 text-base sm:text-xl">
        <span className="font-medium lowercase">{selectedLanguage}</span>
        <button
          className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center border-2 rounded-full bg-transparent
            $${isScrolled ? 'bg-transparent text-gray-800' : 'bg-transparent text-white'}
`}
          onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
        >
          {selectedCurrency}
        </button>

        {isCurrencyOpen && (
          <div className="absolute left-0 mt-2 w-16 sm:w-20 bg-white shadow-lg rounded-md">
            <ul className="py-1">
              {["€", "$", "£"].map((currency) => (
                <li key={currency}>
                  <button
                    className="block w-full text-center px-2 sm:px-4 py-1 hover:bg-pink-200 text-base sm:text-lg text-black"
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

      {/* 🏷 Логотип */}
      <div className="relative w-full h-[64px]">
        <Link
          to="/"
          className={`absolute left-1/2 top-1/4 text-4xl font-bold -translate-x-1/2
            ${isScrolled ? "text-gray-800" : "text-white"}`}
        >
          VERALIS
        </Link>
      </div>

      {/* 🔍 Навигация */}
      <div className="flex items-center gap-4 sm:gap-6">
        <Link to="/wishlist" className={`hover:text-pink-600 ${isScrolled ? "text-gray-800" : "text-white"}`}>
          <Heart size={24} className="sm:size-7" />
        </Link>
        <Link to="/account" className={`hover:text-pink-600 ${isScrolled ? "text-gray-800" : "text-white"}`}>
          <User size={24} className="sm:size-7" />
        </Link>
        <Link to="/search" className={`hover:text-pink-600 ${isScrolled ? "text-gray-800" : "text-white"}`}>
          <Search size={24} className="sm:size-7" />
        </Link>
        <Link to="/cart" className={`relative hover:text-pink-600 ${isScrolled ? "text-gray-800" : "text-white"}`}>
          <ShoppingCart size={24} className="sm:size-7" />
          <span className="absolute -top-2 -right-2 bg-red-300 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            0
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
