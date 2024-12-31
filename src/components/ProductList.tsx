import ProductCard from "./ProductCard";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function ProductList({ products, basePath }: { products: Product[]; basePath: string }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} link={`${basePath}/${product.id}`} />
      ))}
    </ul>
  );
}
