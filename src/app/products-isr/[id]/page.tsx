import ProductDetails from '@/components/ProductDetails';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductISRPage({ params }: Props) {
  const { id } = await params; // Await `params` before using its properties
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  const product: Product = await res.json();

  return <ProductDetails product={product} backLink="/products-isr" />;

}
