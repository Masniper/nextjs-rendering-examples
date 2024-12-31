import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

export default function ProductDetails({
  product,
  backLink,
}: {
  product: Product;
  backLink: string;
}) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <div className="flex flex-col sm:flex-row gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-80 mx-auto sm:w-1/3"
        />
        <div>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-bold">Price: ${product.price}</p>
        </div>
      </div>
      <Link
        href={backLink}
        className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Back to Products
      </Link>
    </div>
  );
}
