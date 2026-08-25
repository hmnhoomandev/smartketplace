import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById } from "@/data/products";

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6">
      <Link href="/" className="text-sm text-gray-500 hover:underline">
        &larr; Retour à tous les produits
      </Link>

      <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.title}
          className="h-80 w-full rounded-lg object-cover"
        />

        <div className="flex flex-col gap-3">
          <span className="w-fit rounded-full bg-brand-light px-2 py-0.5 text-xs font-medium text-brand">
            {product.category}
          </span>
          <h1 className="text-2xl font-bold text-gray-900">
            {product.title}
          </h1>
          <p className="text-sm text-gray-500">{product.location}</p>
          <p className="text-2xl font-semibold text-brand">
            {product.price} {product.currency}
          </p>
          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
