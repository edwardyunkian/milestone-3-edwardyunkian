import AddToCartButton from "@/components/AddToCartButton";

async function getProduct(id) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    cache: "no-store" 
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product details");
  }

  return res.json();
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = await getProduct(id);
  const imageUrl = product.images[0];

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">
        <div className="w-full">
          <div className="aspect-square w-full overflow-hidden rounded-2xl bg-gray-50 border border-gray-100">
            <img
              src={imageUrl}
              alt={product.title}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="flex flex-col justify-start pt-2">
          <h2 className="font-headline text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">{product.title}</h2>

          <p className="mt-4 text-xl font-semibold text-blue-600 sm:text-2xl">
            ${product.price}
          </p>
          <div className="my-6 border-t border-gray-100" />

          <div className="space-y-4">
            <h3 className="font-headline text-xs font-bold uppercase tracking-wider text-gray-400">Description</h3>
            <p className="font-body text-base leading-relaxed text-gray-600">{product.description|| "No description available for this product."}</p>
          </div>

          <div className="mt-8 lg:mt-12">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </section>
  );
}