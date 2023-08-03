const faqs = [
  {
    id: 1,
    question: "How Does Edgy work?",
    answer:
      "At Edgy, we work diligently to provide you with authentic and organic Instagram growth. Our team of dedicated social media experts manually engages with your target audience, sparking genuine interactions and connections. We use data-driven strategies to optimize your content, hashtags, and posting schedule to ensure maximum visibility and growth. With Edgy, you can expect real, engaged followers who align with your brand's vision.",
  },
  {
    id: 2,
    question: "How many followers should I expect?",
    answer:
      "The number of followers you gain depends on various factors, including your current account status, your content quality, and your target audience. While we strive to achieve substantial growth, we prioritize quality over quantity. Rest assured that our strategies focus on attracting relevant followers who are genuinely interested in your content and likely to engage with your posts.",
  },
  {
    id: 3,
    question: "Does my account have to be in specific industry?",
    answer:
      "No, your account does not need to be in a specific industry to benefit from our services. We cater to a diverse range of clients, including individuals, businesses, and influencers from various industries. Our team customizes strategies to align with your unique brand identity, ensuring that your Instagram growth is tailored to your specific goals and niche.",
  },
  {
    id: 4,
    question: "Why do I need more followers?",
    answer:
      "Instagram followers play a pivotal role in building your online presence and boosting your credibility. Having a substantial follower count not only increases your brand's visibility but also attracts more engagement, potential customers, and collaboration opportunities. More followers can lead to higher brand recognition, expanded reach, and increased influence in your industry.",
  },
  {
    id: 5,
    question: "Do you work manually?",
    answer:
      "Absolutely! At Edgy, we take pride in our commitment to authenticity and manual growth. Unlike services that rely on bots or automation, we believe that real people engaging with your audience creates more meaningful connections. Our team manually interacts with potential followers, ensuring genuine engagement and sustainable growth for your account.",
  },
  {
    id: 6,
    question: "What do I need to get started?",
    answer:
      "Getting started with Edgy is simple. All you need is an active Instagram account and a clear vision of your growth goals. Once you choose one of our Instagram Growth Plans (Standard, Premium, or Business), our team will schedule a consultation to understand your objectives and tailor our strategies accordingly. From there, you can sit back and watch your Instagram presence flourish with our expert guidance and support.",
  },
];

export default function PricingFaq() {
  return (
    <section className="bg-gray-900 ">
      <section className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center">
          Frequently Asked Questions
        </h2>
        <section className="mt-12">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
            {faqs.map((faq) => (
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