import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../api/products';
import ProductGrid from '../components/ProductGrid';

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllProducts()
      .then(data => {
        console.log('Товары из API:', data);
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Ошибка загрузки товаров');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section style={{ padding: 20 }}>
      <h1>Catalogue de cosmétiques de soin</h1>
      <ProductGrid products={products} />
    </section>
  );
};

export default Catalog;

