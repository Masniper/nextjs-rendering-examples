import ButtonLink from '@/components/ButtonLink';
import ProductList from "@/components/ProductList";
type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};
export default async function ProductsSSRPage() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  const products: Product[] = await res.json();

  return (
    <div className="p-6">
      <ButtonLink href="/" label="Back" color="blue" />
      <h1 className="text-3xl font-bold mb-6">Server-Side Rendering (SSR)</h1>
      <ProductList products={products} basePath="/products-ssr" />
    </div>
  );
}
