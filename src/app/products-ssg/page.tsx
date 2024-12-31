import ButtonLink from '@/components/ButtonLink';
import ProductList from "@/components/ProductList";

export default async function ProductsSSGPage() {
  // Fetching products during build time
  const res = await fetch("https://fakestoreapi.com/products", { cache: "force-cache" });
  const products = await res.json();

  return (
    <div className="p-6">
      <ButtonLink href="/" label="Back" color="blue" />
      <h1 className="text-3xl font-bold mb-6">Static Site Generation (SSG)</h1>
      <ProductList products={products} basePath="/products-ssg" />
    </div>
  );
}
