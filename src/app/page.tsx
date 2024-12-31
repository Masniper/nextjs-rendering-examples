import ButtonLink from "@/components/ButtonLink";

export default function Home() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
        Explore Rendering Methods
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Learn about different rendering methods in Next.js: 
        <span className="font-semibold text-gray-800"> Server-Side Rendering (SSR)</span>, 
        <span className="font-semibold text-gray-800"> Static Site Generation (SSG)</span>, 
        <span className="font-semibold text-gray-800"> Incremental Static Regeneration (ISR)</span>, and 
        <span className="font-semibold text-gray-800"> Client-Side Rendering (CSR)</span>.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ButtonLink href="/products-csr" label="Go to CSR Page" color="red" />
        <ButtonLink href="/products-ssr" label="Go to SSR Page" color="gray" />
        <ButtonLink href="/products-ssg" label="Go to SSG Page" color="green" />
        <ButtonLink href="/products-isr" label="Go to ISR Page" color="blue" />
      </div>
    </div>
  );
}
