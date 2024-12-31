import ButtonLink from '@/components/ButtonLink';
import ProductList from "@/components/ProductList";

export default async function ProductsISRPage() {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 60 }, // ISR every 60 seconds
  });
  const products = await res.json();

  return (
    <div className="p-6">
      <ButtonLink href="/" label="Back" color="blue" />
      <h1 className="text-3xl font-bold mb-6">
        Incremental Static Regeneration (ISR)
      </h1>
      <ProductList products={products} basePath="/products-isr" />
    </div>
  );
}
