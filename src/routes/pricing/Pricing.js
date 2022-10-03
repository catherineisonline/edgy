import PricingComparisonTable from "./PricingComparisonTable";
import PricingFaq from "./PricingFaq";
import PricingLogos from "./PricingLogos";

export default function Pricing() {
  return (
    <main className="bg-gray-900">
      <section className="text-center p-10">
        <h2 className="text-lg leading-6 font-semibold text-indigo-600 uppercase tracking-wider">
          Pricing Comparison
        </h2>
        <h3 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          Instagram Growth Plans
        </h3>
        <p className="mt-3 max-w-4xl mx-auto text-xl text-gray-300 sm:mt-5 sm:text-2xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          numquam eligendi quos odit doloribus molestiae voluptatum.
        </p>
      </section>
     <PricingComparisonTable />
     <PricingLogos/>
     <PricingFaq/>
    </main>
  );
}
