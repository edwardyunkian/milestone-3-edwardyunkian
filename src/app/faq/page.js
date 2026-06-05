export default function FAQPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
      <h2 className="font-headline text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>

      <div className="mt-8 space-y-6 border-t border-gray-100 pt-6">
        <section className="pb-6 border-b border-gray-50 last:border-0">
          <h3 className="font-headline text-base font-semibold text-gray-900">
            How long does shipping take?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            For domestic orders within Indonesia, standard shipping typically takes 2–4 business days. Express shipping options are available at checkout if you need your essentials sooner.
          </p>
        </section>

        <section className="pb-6 border-b border-gray-50 last:border-0">
          <h3 className="font-headline text-base font-semibold text-gray-900">
            What payment methods do you accept?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            We accept all major credit cards, bank transfers (VA), and popular digital wallets including GoPay, OVO, and Dana to make your checkout fast and friendly.
          </p>
        </section>

        <section className="pb-6 border-b border-gray-50 last:border-0">
          <h3 className="font-headline text-base font-semibold text-gray-900">
            Can I change or cancel my order after placing it?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            Because we process and pack orders quickly, changes can only be made within 30 minutes of placing your order. Please reach out to our support team immediately for assistance.
          </p>
        </section>

        <section className="pb-6 border-b border-gray-50 last:border-0">
          <h3 className="font-headline text-base font-semibold text-gray-900">
            What is your return policy?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            We offer a 14-day hassle-free return window for all unused items in their original packaging. Simply contact our friendly customer team to initiate a return.
          </p>
        </section>
      </div>
    </section>
  );
}