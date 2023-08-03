import { Link } from "react-router-dom";

export default function PricingLogos() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2>
        <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
          business
        </span>
        <span className="mb-10 block text-3xl text-center leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          We work with
        </span>
      </h2>
      <section className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
        <Link to="https://www.airbnb.com/" target="_blank" className="opacity-50 hover:opacity-100 duration-500 col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img
            className="h-12"
            src="https://img.icons8.com/?size=512&id=103424&format=png"
            alt="AirBNB"
          />
        </Link>

        <Link to="https://www.duolingo.com/" target="_blank" className="opacity-50 hover:opacity-100 duration-500 col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img
            className="h-12"
            src="https://img.icons8.com/?size=512&id=jJS472JMXlsE&format=png"
            alt="Duolingo"
          />
        </Link>
        <Link to="https://www.apple.com/final-cut-pro/" target="_blank" className="opacity-50 hover:opacity-100 duration-500 col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img
            className="h-12"
            src="https://img.icons8.com/?size=512&id=9vdP7gCiMiAA&format=png"
            alt="FinalCut"
          />
        </Link>
        <Link to="https://www.fiverr.com/" target="_blank" className="opacity-50 hover:opacity-100 duration-500 col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
          <img
            className="h-12"
            src="https://img.icons8.com/?size=512&id=ngc6JsBomclm&format=png"
            alt="Fiverr"
          />
        </Link>
        <Link to="https://www.figma.com/" target="_blank" className="opacity-50 hover:opacity-100 duration-500 col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
          <img
            className="h-12"
            src="https://img.icons8.com/?size=512&id=zfHRZ6i1Wg0U&format=png"
            alt="Figma"
          />
        </Link>
      </section>
    </section>
  )
}