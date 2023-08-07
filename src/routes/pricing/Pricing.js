import Partners from "../landing/Partners";
import PricingComparisonTable from "./PricingComparisonTable";
import PricingFaq from "./PricingFaq";

export default function Pricing() {
  return (
    <main className="bg-gray-900">
      <section className="text-center p-10">
        <h2 className="text-lg leading-6 font-semibold text-[color:var(--primary-font-color)] uppercase tracking-wider">
          Pricing Comparison
        </h2>
        <h3 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          Instagram Growth Plans
        </h3>
        <p className="mt-3 max-w-4xl mx-auto text-xl text-gray-300 sm:mt-5 sm:text-2xl">
          Instagram Growth Plans offer a clear pathway to success, whether you are an aspiring influencer, a startup entrepreneur, or an established brand looking to expand your reach. Choose from our three meticulously designed plans - Standard, Premium, and Business - and embark on a transformational journey to elevate your Instagram growth.
        </p>
      </section>
      <PricingComparisonTable />
      <PricingFaq />
      <Partners />
    </main>
  );
}
