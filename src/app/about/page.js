export default function AboutPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:py-24 text-center">

      <span className="font-body text-xs font-bold uppercase tracking-widest text-blue-600">
        Our Story
      </span>

      <h2 className="font-headline mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Essentials, Reimagined.
      </h2>

      <div className="mt-8 space-y-6 font-body text-base leading-relaxed text-gray-600 sm:text-lg">
        <p>
          Welcome to <span className="font-semibold text-gray-900">RevoShop</span>! 
          We started with a pretty simple idea: the everyday things you use 
          the most shouldn’t be a hassle to find, and they definitely shouldn’t 
          be boring. 
        </p>
        
        <p>
          We curate simple, reliable, and thoughtful products designed to fit 
          seamlessly into your daily routine. No endless scrolling, no choice 
          paralysis—just the good stuff, delivered straight to your door with 
          a friendly checkout experience.
        </p>

        <p className="text-sm italic text-gray-400">
          Thanks for stopping by and making us a part of your day!
        </p>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="h-1 w-12 rounded-full bg-gray-100" />
      </div>
    </section>
  );
}