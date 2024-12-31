"use client";
import { useEffect, useState } from "react";
import ButtonLink from "@/components/ButtonLink";
import ProductList from "@/components/ProductList";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function ProductsCSRPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products on the client side
    const fetchProducts = async () => {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <ButtonLink href="/" label="Back" color="blue" />
      <h1 className="text-3xl font-bold mb-6">Client-Side Rendering (CSR)</h1>
      <ProductList products={products} basePath="/products-csr" />
    </div>
  );
}
