import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-pink-50 border border-pink-200 rounded-lg p-5 max-w-xs shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <div className="overflow-hidden rounded-md mb-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-gray-800 text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-pink-600 font-bold text-lg">{product.price} ₴</span>
        <button
          onClick={() => onAddToCart(product)}
          className="flex items-center bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors duration-300"
        >
          <ShoppingCartIcon className="w-5 h-5 mr-2" />
          Au panier
        </button>
      </div>
    </div>
  );
};

export default ProductCard;





  /* <ul>
        {products.map(product => (
          <li key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Цена: {product.price} грн</p>
          </li>
        ))}
      </ul> */