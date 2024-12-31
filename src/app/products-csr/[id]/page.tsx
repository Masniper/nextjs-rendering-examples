"use client";

import React, { useEffect, useState, use } from "react";
import ProductDetails from "@/components/ProductDetails";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

type Props = {
  params: Promise<{ id: string }>; // Params is now a Promise
};

export default function ProductCSRPage({ params }: Props) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  // Unwrap params using React.use()
  const resolvedParams = use(params); // Resolve params Promise
  const { id } = resolvedParams;

  useEffect(() => {
    // Fetch product details on the client side
    const fetchProduct = async () => {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (!product) return <div className="p-6">Product not found.</div>;

  return <ProductDetails product={product} backLink="/products-csr" />;
}
