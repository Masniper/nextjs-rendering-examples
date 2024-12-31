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

export default async function ProductSSGPage({ params }: Props) {
  const { id } = await params; // Await `params` before using its properties
  // Fetching product details during build time
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, { cache: "force-cache" });
  const product: Product = await res.json();

  return <ProductDetails product={product} backLink="/products-ssg" />;

}
