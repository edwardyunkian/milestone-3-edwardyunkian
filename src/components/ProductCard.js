import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-white p-2.5 transition-all duration-200 hover:bg-gray-50"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col pt-3 px-1">
        <h2 className="font-headline line-clamp-2 text-sm font-semibold tracking-tight text-gray-800 transition-colors group-hover:text-blue-600 min-h-[40px]">
          {product.name}
        </h2>

        <p className="font-body mt-1.5 text-sm font-medium text-gray-500">
          Rp {product.price.toLocaleString("id-ID")}
        </p>
      </div>
    </Link>
  );
}