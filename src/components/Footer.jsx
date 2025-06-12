import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-pink-300 text-white py-12 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-y-10">

        {/* Секция 1: Social Icons в строку */}
        <section className="flex justify-center space-x-8">
          <a href="#" aria-label="Facebook" className="hover:text-pink-600 transition">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/>
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-600 transition">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 7.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm5.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-pink-600 transition">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.03 9.03 0 01-2.83 1.08A4.48 4.48 0 0016.5 2a4.48 4.48 0 00-4.48 4.48c0 .35.04.69.12 1.02A12.85 12.85 0 013 3.15a4.49 4.49 0 001.39 5.97 4.41 4.41 0 01-2.03-.56v.06a4.48 4.48 0 003.6 4.4 4.52 4.52 0 01-2.02.08 4.48 4.48 0 004.18 3.12 9 9 0 01-5.6 1.93A9.33 9.33 0 012 19.54a12.7 12.7 0 006.92 2.02c8.3 0 12.84-6.88 12.84-12.84 0-.2 0-.4-.02-.6A9.22 9.22 0 0023 3z"/>
            </svg>
          </a>
        </section>

        {/* Секция 2: Контакты */}
        <section className="flex justify-center space-x-12 text-pink-100 text-sm">
          <a href="#" className="hover:text-pink-600 transition">Contacts</a>
          <a href="#" className="hover:text-pink-600 transition">FAQ</a>
          <a href="#" className="hover:text-pink-600 transition">Livraison</a>
        </section>

        {/* Секция 3: Сервис клиента */}
        <section className="flex justify-center space-x-12 text-pink-100 text-sm">
          <a href="#" className="hover:text-pink-600 transition">Privacy Policy</a>
          <a href="#" className="hover:text-pink-600 transition">Cookies Settings</a>
          <a href="#" className="hover:text-pink-600 transition">Cookie Policy</a>
        </section>

      </div>

      {/* Нижняя часть с копирайтом */}
      <div className="border-t border-pink-400 mt-12 pt-6 text-center text-pink-200 text-xs sm:text-sm select-none">
        © 2025 Cosmetics Shop. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
