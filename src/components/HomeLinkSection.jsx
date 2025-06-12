export default function HomeLinkSection() {
  const items = [
    {
      title: 'Conseils de soin',
      href: '/soins',
      imageSrc: '/images/fon1.jpg', // ✅ без /public
    },
    {
      title: 'Ingrédients de nos produits',
      href: '/ingredients',
      imageSrc: '/images/fon-2.jpg', // ✅ без /public
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12 px-4 md:px-16">
      {items.map(({ title, href, imageSrc }) => (
        <a
          key={title}
          href={href}
          className="relative group overflow-hidden rounded-2xl shadow-lg"
        >
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-180 object-cover transform group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition duration-500" />
          <h2 className="absolute bottom-4 left-4 text-white text-2xl md:text-3xl font-semibold drop-shadow">
            {title}
          </h2>
        </a>
      ))}
    </section>
  );
}
