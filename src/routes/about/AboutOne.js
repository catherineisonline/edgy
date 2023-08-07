import EdgyIcon from "../../assets/images/edgy-icon.png";
import companyInformation from "../../data/companyInformation";

export default function AboutOne() {
  return (
    <article className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
      <section className="relative sm:py-16 lg:py-0">
        <section
          aria-hidden="true"
          className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
        >
          <section className="absolute inset-y-0 right-1/2 w-full bg-indigo-500 rounded-r-3xl lg:right-72 opacity-50" />
          <svg
            className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
            width={404}
            height={392}
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={392}
              fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
            />
          </svg>
        </section>
        <section className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
          {/* Testimonial card*/}
          <section className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              aria-hidden="true"
            />
            <section className="absolute inset-0 bg-indigo-500 mix-blend-multiply opacity-30" />
            <section className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90" />
            <section className="relative px-8">
              <section>
                <img className="h-12" src={EdgyIcon} alt="Edgy" />
              </section>
              <blockquote className="mt-8">
                <section className="relative text-lg font-medium text-white md:flex-grow">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-[color:var(--primary-font-color)]"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                    Welcome to a world of limitless connections and boundless possibilities. At Edgy, we're not just a social media company; we're the architects of your digital success. Join us today and unleash the true power of your online presence
                  </p>
                </section>
                <section className="mt-4">
                  <p className="text-base font-semibold text-indigo-200">
                    Catherine Black, CEO at Edgy
                  </p>
                </section>
              </blockquote>
            </section>
          </section>
        </section>
      </section>

      <section className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
        <section className="pt-12 sm:pt-16 lg:pt-20">
          <h2 className="text-3xl text-white font-extrabold tracking-tight sm:text-4xl">
            On a mission to empower teams
          </h2>
          <section className="mt-6 text-gray-500 space-y-6">
            <p className="text-base leading-7">
              Welcome to Edgy, your one-stop solution for Instagram growth services! We are a team of passionate and dedicated professionals who understand the importance of a strong online presence and the impact it can have on individuals and businesses alike. Our mission is to help you unlock the true potential of your Instagram account, enabling you to reach new heights of success and influence in the digital world.
            </p>
            <p className="text-base leading-7">
              At Edgy, we firmly believe that Instagram is more than just a social media platform; it has become a powerful tool for personal branding, business growth, and community engagement. As the world becomes increasingly digital, having a robust Instagram presence is crucial for individuals looking to build a personal brand and businesses seeking to expand their reach and connect with their target audience.
            </p>
            <p className="text-base leading-7">
              Our services are designed to cater to the unique needs of individuals and businesses at any stage of their Instagram journey. Whether you're a budding influencer, a start-up, or an established brand, we have tailor-made solutions to help you achieve your goals.
            </p>
          </section>
        </section>
        {/* Stats section */}
        <section className="mt-10">
          <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
            {companyInformation.map((stat) => (
              <section
                key={stat.label}
                className="border-t-2 border-gray-100 pt-6"
              >
                <dt className="text-base font-medium text-gray-500">
                  {stat.label}
                </dt>
                <dd className="text-3xl font-extrabold tracking-tight text-white">
                  {stat.value}
                </dd>
              </section>
            ))}
          </dl>
        </section>
      </section>
    </article>
  )
}