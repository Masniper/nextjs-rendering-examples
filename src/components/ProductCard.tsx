import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({
  product,
  link,
}: {
  product: Product;
  link: string;
}) {
  return (
    <li className="border p-4 rounded-lg shadow hover:shadow-lg">
      <Link href={link} className="block">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold">{product.title}</h2>
        <p className="text-gray-600">Price: ${product.price}</p>
      </Link>
    </li>
  );
}
