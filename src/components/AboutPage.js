import EdgyIcon from "../images/edgy-icon.png";
import Team from "./Team";
import Cta from "./Cta";
const stats = [
  { label: "Founded", value: "2022" },
  { label: "Employees", value: "200" },
  { label: "Beta Users", value: "521" },
  { label: "Raised", value: "$25M" },
];

export default function AboutPage() {
  return (
    <main className="relative bg-gray-900 py-16 sm:py-24">
      {/* SECTION ONE */}
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
                      className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-400"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative">
                      Tincidunt integer commodo, cursus etiam aliquam neque, et.
                      Consectetur pretium in volutpat, diam. Montes, magna
                      cursus nulla feugiat dignissim id lobortis amet.
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
              <p className="text-lg">
                Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque.
                Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc
                nisl netus morbi vel porttitor vitae ut. Amet vitae fames
                senectus vitae.
              </p>
              <p className="text-base leading-7">
                Sollicitudin tristique eros erat odio sed vitae, consequat
                turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros
                eu viverra donec ut volutpat donec laoreet quam urna.
                Sollicitudin tristique eros erat odio sed vitae, consequat
                turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros
                eu viverra donec ut volutpat donec laoreet quam urna.
              </p>
              <p className="text-base leading-7">
                Rhoncus nisl, libero egestas diam fermentum dui. At quis
                tincidunt vel ultricies. Vulputate aliquet velit faucibus
                semper. Pellentesque in venenatis vestibulum consectetur nibh
                id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim
                fermentum lacus in. Viverra.
              </p>
            </section>
          </section>

          {/* Stats section */}
          <section className="mt-10">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
              {stats.map((stat) => (
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
      {/* SECTION TWO */}
      <article className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden">
        <section className="max-w-max lg:max-w-7xl mx-auto">
          <section className="relative z-10 mb-8 md:mb-2 md:px-6 ">
            <section className="text-base max-w-prose lg:max-w-none ">
              <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                Become an influencer
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                Get Instagram Followers Using Our Powerful Growth Strategies
              </p>
            </section>
          </section>
          <section className="relative">
            <svg
              className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="95e8f2de-6d30-4b7e-8159-f791729db21b"
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
                height={384}
                fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
              />
            </svg>
            <svg
              className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
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
                height={384}
                fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
              />
            </svg>
            <section className="relative md:bg-gray-900 md:p-6">
              <section className="lg:grid lg:grid-cols-2 lg:gap-6">
                <section className="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                  <p>
                    Ultrices ultricies a in odio consequat egestas rutrum. Ut
                    vitae aliquam in ipsum. Duis nullam placerat cursus risus
                    ultrices nisi, vitae tellus in. Qui non fugiat aut minus aut
                    rerum. Perspiciatis iusto mollitia iste minima soluta id.
                  </p>
                  <p>
                    Erat pellentesque dictumst ligula porttitor risus eget et
                    eget. Ultricies tellus felis id dignissim eget. Est augue{" "}
                    <a href="/">maecenas</a> risus nulla ultrices congue nunc
                    tortor. Eu leo risus porta integer suspendisse sed sit
                    ligula elit.
                  </p>
                  <ol>
                    <li>
                      Integer varius imperdiet sed interdum felis cras in nec
                      nunc.
                    </li>
                    <li>
                      Quam malesuada odio ut sit egestas. Elementum at porta
                      vitae.
                    </li>
                  </ol>
                  <p>
                    Amet, eu nulla id molestie quis tortor. Auctor erat justo,
                    sed pellentesque scelerisque interdum blandit lectus. Nec
                    viverra amet ac facilisis vestibulum. Vestibulum purus nibh
                    ac ultricies congue.
                  </p>
                </section>
                <section className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                  <p>
                    Erat pellentesque dictumst ligula porttitor risus eget et
                    eget. Ultricies tellus felis id dignissim eget. Est augue
                    maecenas risus nulla ultrices congue nunc tortor.
                  </p>
                  <p>
                    Eu leo risus porta integer suspendisse sed sit ligula elit.
                    Elit egestas lacinia sagittis pellentesque neque dignissim
                    vulputate sodales. Diam sed mauris felis risus, ultricies
                    mauris netus tincidunt. Mauris sit eu ac tellus nibh non
                    eget sed accumsan. Viverra ac sed venenatis pulvinar elit.
                    Cras diam quis tincidunt lectus. Non mi vitae, scelerisque
                    felis nisi, netus amet nisl.
                  </p>
                  <p>
                    Eu eu mauris bibendum scelerisque adipiscing et. Justo,
                    elementum consectetur morbi eros, posuere ipsum tortor. Eget
                    cursus massa sed velit feugiat sed ut. Faucibus eros mauris
                    morbi aliquam nullam. Scelerisque elementum sit magna
                    ullamcorper dignissim pretium.
                  </p>
                </section>
              </section>
              <section className="mt-8 inline-flex rounded-md shadow">
                <a
                  href="/edgy/contact"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Contact us
                </a>
              </section>
            </section>
          </section>
        </section>
      </article>
      {/* SECTION THREE */}
      <article className="relative bg-gray-900">
        <section className="lg:absolute lg:inset-0">
          <section className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
              alt=""
            />
          </section>
        </section>

        <section className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2 ">
          <section className="lg:col-start-2 lg:pl-8 ">
            <section className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0 ">
              <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                Collaborate
              </h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                Let's work together
              </h3>
              <p className="mt-8 text-lg text-gray-500">
                Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque.
                Blandit amet, sed aenean erat arcu morbi.
              </p>
              <section className="mt-5 prose prose-indigo text-gray-500">
                <p>
                  Sollicitudin tristique eros erat odio sed vitae, consequat
                  turpis elementum. Lorem nibh vel, eget pretium arcu vitae.
                  Eros eu viverra donec ut volutpat donec laoreet quam urna.
                </p>
                <p>
                  Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique
                  sit nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum
                  et et et sit. Faucibus sed non gravida lectus dignissim
                  imperdiet a.
                </p>
                <p>
                  Dictum magnis risus phasellus vitae quam morbi. Quis lorem
                  lorem arcu, metus, egestas netus cursus. In.
                </p>
                <ul>
                  <li>Quis elit egestas venenatis mattis dignissim.</li>
                  <li>
                    Cras cras lobortis vitae vivamus ultricies facilisis tempus.
                  </li>
                  <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
                </ul>
                <p>
                  Rhoncus nisl, libero egestas diam fermentum dui. At quis
                  tincidunt vel ultricies. Vulputate aliquet velit faucibus
                  semper. Pellentesque in venenatis vestibulum consectetur nibh
                  id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi
                  enim fermentum lacus in. Viverra.
                </p>
                <p>
                  Tincidunt integer commodo, cursus etiam aliquam neque, et.
                  Consectetur pretium in volutpat, diam. Montes, magna cursus
                  nulla feugiat dignissim id lobortis amet. Laoreet sem est
                  phasellus eu proin massa, lectus. Diam rutrum posuere donec
                  ultricies non morbi. Mi a platea auctor mi.
                </p>
                <p>
                  Mauris ullamcorper imperdiet nec egestas mi quis quam ante
                  vulputate. Vel faucibus adipiscing lacus, eget. Nunc fermentum
                  id tellus donec. Ut metus odio sit sit varius non nunc orci.
                  Eu, mi neque, ornare suspendisse amet, nibh. Facilisi volutpat
                  lectus id sapien dis mauris rhoncus. Est rhoncus, interdum
                  imperdiet ac eros, diam mauris, tortor. Risus id sit molestie
                  magna.
                </p>
              </section>
            </section>
          </section>
        </section>
      </article>
      <Team />
      <Cta />
    </main>
  );
}
