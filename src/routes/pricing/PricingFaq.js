import pricingFaq from "../../data/pricingFaq";

export default function PricingFaq() {
  return (
    <section className="bg-gray-900 ">
      <section className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center">
          Frequently Asked Questions
        </h2>
        <section className="mt-12">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
            {pricingFaq.map((faq) => (
              <section key={faq.id} className="space-y-2">
                <dt className="text-lg leading-6 font-medium text-white">
                  {faq.question}
                </dt>
                <dd className="text-base text-gray-500">{faq.answer}</dd>
              </section>
            ))}
          </dl>
        </section>
      </section>
    </section>
  )
}