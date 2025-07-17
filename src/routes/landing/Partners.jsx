import partners from "../../data/partners";

export default function Partners() {
  return (
    <article className="bg-gray-900 mt-16 hidden md:block max-w-7xl mx-auto pb-8">
      <section className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5 lg:mt-12 sm:mt-32">
        {partners.map((partner) => {
          return (
            <a key={partner.id} href={partner.href} target="_blank" rel="noreferrer" className="opacity-50 hover:opacity-100 duration-500 col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src={partner.img}
                alt={partner.name}
              />
            </a>)
        })}
      </section>
    </article>
  );
}
