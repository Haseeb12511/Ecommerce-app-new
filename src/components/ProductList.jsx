import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="w-4/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
