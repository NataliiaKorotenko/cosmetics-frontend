
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: 20,
  }}>
    {products.map(product => (
      <ProductCard key={product._id} product={product} />
    ))}
  </div>
);

export default ProductGrid;
