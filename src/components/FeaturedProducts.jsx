import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Rouge à lèvres mat",
    description: "Finition veloutée, tenue 24h.",
    price: "19,99 €",
    image: "/images/lipstick.jpg",
    rating: 4.5,
    reviews: 112,
  },
  {
    id: 2,
    name: "Palette d’ombres à paupières",
    description: "12 teintes ultra pigmentées.",
    price: "29,99 €",
    image: "/images/eyeshadow.jpg",
    rating: 4.8,
    reviews: 89,
  },
  {
    id: 3,
    name: "Fond de teint liquide",
    description: "Couvre parfaitement, fini naturel.",
    price: "24,50 €",
    image: "/images/foundation.jpg",
    rating: 4.3,
    reviews: 76,
  },
  {
    id: 4,
    name: "Mascara volume extrême",
    description: "Volume et courbure spectaculaires.",
    price: "17,90 €",
    image: "/images/mascara.jpg",
    rating: 4.6,
    reviews: 101,
  },
  {
    id: 5,
    name: "Crème illuminatrice",
    description: "Effet lumineux immédiat.",
    price: "21,00 €",
    image: "/images/highlighter.jpg",
    rating: 4.7,
    reviews: 54,
  },
  {
    id: 6,
    name: "Liner liquide waterproof",
    description: "Précision et tenue extrême.",
    price: "15,99 €",
    image: "/images/liner.jpg",
    rating: 4.2,
    reviews: 33,
  },
];

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function FeaturedProducts() {
  const randomProducts = shuffle(products).slice(0, 4);
  const swiperRef = useRef(null);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto relative">
      <h2 className="text-3xl font-bold mb-6 text-center">Produits en vedette</h2>

      {/* Кнопка влево */}
      <button
        aria-label="Previous slide"
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute top-1/2 left-2 z-10 -translate-y-1/2 bg-pink-300 text-white p-2 rounded-full shadow hover:bg-pink-700 transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Кнопка вправо */}
      <button
        aria-label="Next slide"
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute top-1/2 right-2 z-10 -translate-y-1/2 bg-pink-300 text-white p-2 rounded-full shadow hover:bg-pink-700 transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {randomProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <div className="flex items-center text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5"
                    fill={i < Math.round(product.rating) ? "currentColor" : "none"}
                  />
                ))}
                <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
              </div>
              <p className="text-xl font-bold text-pink-600">{product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}