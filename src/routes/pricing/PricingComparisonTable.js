import { Fragment } from "react";
import { CheckIcon, MinusIcon } from "@heroicons/react/solid";

export const sections = [
  {
    name: "Features",
    features: [
      {
        name: "Organic Follower Growth: Gain real, engaged followers through genuine interactions and personalized strategies, helping you build a loyal community.",
        tiers: { Standard: true, Premium: true, Business: true },
      },
      {
        name: "Content Optimization: Receive tailored content recommendations to enhance your feed's visual appeal and captivate your target audience.",
        tiers: { Standard: true, Premium: true, Business: true },
      },
      {
        name: "Hashtag Research: Unlock the potential of strategic hashtags to boost your posts' discoverability and increase your reach.",
        tiers: { Standard: true, Premium: true, Business: true },
      },
      {
        name: "Community Engagement: Our team proactively engages with your followers, responding to comments, and fostering genuine connections on your behalf.",
        tiers: { Standard: true, Premium: true, Business: true },
      },
      {
        name: "Monthly Progress Report: Stay updated on your Instagram growth journey with a comprehensive monthly progress report, showcasing key metrics and insights.",
        tiers: { Premium: true, Business: true },
      },
      {
        name: "Customized Strategy: Receive a tailor-made growth strategy designed specifically for your niche and target audience.",
        tiers: { Premium: true, Business: true },
      },
      {
        name: "Influencer Outreach: Tap into our network of influencers for collaborations and shout-outs to gain exposure to a broader audience.",
        tiers: { Premium: true, Business: true },
      },
      {
        name: "Story Management: Maximize the potential of Instagram Stories with engaging content and highlights to captivate your followers.",
        tiers: { Premium: true, Business: true },
      },
      {
        name: "Competitor Analysis: Gain insights into your competitors' performance to identify opportunities and stay ahead of the curve.",
        tiers: { Premium: true, Business: true },
      }
    ],
  },
  {
    name: "Reporting",
    features: [
      {
        name: "Follower Growth Analysis: Track your follower count's organic growth over time to understand the impact of our strategies.",
        tiers: { Standard: true, Premium: true, Business: true },
      },
      {
        name: "Engagement Metrics: Get detailed statistics on likes, comments, and interactions to gauge your content's effectiveness..",
        tiers: { Standard: true, Premium: true, Business: true },
      },
      {
        name: "Audience Insights: Understand your audience demographics, interests, and behavior to fine-tune your content strategy.",
        tiers: { Premium: true, Business: true }
      },
      {
        name: "Post Optimization Suggestions: Receive recommendations for optimizing your post timings and content to maximize engagement.",
        tiers: { Business: true }
      }
    ],
  },
  {
    name: "Support",
    features: [
      {
        name: "24/7 Email Support: Reach out to us anytime, and our dedicated support team will respond promptly to address your queries and concerns.",
        tiers: { Standard: true, Premium: true, Business: true },
      },
      {
        name: "Priority Queue: As a Standard plan member, your inquiries receive priority handling for faster resolutions.",
        tiers: { Premium: true, Business: true }
      },
      {
        name: "Priority Growth Campaigns: Participate in priority growth campaigns and strategic collaborations with other businesses to accelerate your growth.",
        tiers: { Premium: true, Business: true },
      },
      {
        name: "Advanced Content Strategy: Unlock a comprehensive content strategy tailored to your brand's voice and objectives, ensuring consistent and impactful messaging.",
        tiers: { Business: true },
      },
      {
        name: "Influencer Management: Utilize our expertise in influencer management to build strong partnerships and maximize your brand's exposure.",
        tiers: { Business: true },
      },
      {
        name: "Exclusive Early Access: Get exclusive early access to new features and updates before they're rolled out to other plans.",
        tiers: { Business: true },
      },
    ],
  },
];

export const tiers = [
  {
    name: "Standard",
    href: "/sign-up",
    priceMonthly: 79,
    description: "Our Standard plan is perfect for individuals and small businesses looking to kickstart their Instagram growth journey. With a focus on authenticity and manual interaction, we ensure that your account receives the attention it deserves, driving real, organic growth.",
  },
  {
    name: "Premium",
    href: "/sign-up",
    priceMonthly: 149,
    description: "Our Premium plan takes your Instagram growth to the next level, catering to influencers, businesses, and brands seeking accelerated growth and increased engagement.",
  },
  {
    name: "Business",
    href: "/sign-up",
    priceMonthly: 349,
    description:
      "Our Business plan is designed for established brands and businesses looking to dominate their industry and reach new heights of influence on Instagram.",
  },
];

export default function PricingComparisonTable() {
  return (
    <section className="max-w-2xl mx-auto bg-white py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      {/* xs to lg */}
      <section className="space-y-24 lg:hidden">
        {tiers.map((tier) => (
          <section key={tier.name}>
            <section className="px-4 mb-8">
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                {tier.name}
              </h2>
              <p className="mt-4">
                <span className="text-4xl font-extrabold text-gray-900">
                  ${tier.priceMonthly}
                </span>
                <span className="text-base font-medium text-gray-500">
                  /mo
                </span>
              </p>
              <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
              <a
                href={tier.href}
                className="mt-6 block w-full bg-indigo-600 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
              >
                Buy {tier.name}
              </a>
            </section>

            {sections.map((section) => (
              <table key={section.name} className="w-full">
                <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                  {section.name}
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {section.features.map((feature) => (
                    <tr
                      key={feature.name}
                      className="border-t border-gray-200"
                    >
                      <th
                        className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                        scope="row"
                      >
                        {feature.name}
                      </th>
                      <td className="py-5 pr-4">
                        {typeof feature.tiers[tier.name] === "string" ? (
                          <span className="block text-sm text-gray-700 text-right">
                            {feature.tiers[tier.name]}
                          </span>
                        ) : (
                          <>
                            {feature.tiers[tier.name] === true ? (
                              <CheckIcon
                                className="ml-auto h-5 w-5 text-green-500"
                                aria-hidden="true"
                              />
                            ) : (
                              <MinusIcon
                                className="ml-auto h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            )}

                            <span className="sr-only">
                              {feature.tiers[tier.name] === true
                                ? "Yes"
                                : "No"}
                            </span>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}

            <section className="border-t border-gray-200 px-4 pt-5">
              <a
                href="/"
                className="block w-full bg-indigo-600 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
              >
                Buy {tier.name}
              </a>
            </section>
          </section>
        ))}
      </section>

      {/* lg+ */}
      <section className="hidden lg:block">
        <table className="w-full h-px table-fixed">
          <caption className="sr-only">Pricing plan comparison</caption>
          <thead>
            <tr>
              <th
                className="pb-4 pl-6 pr-6 text-sm font-medium text-gray-900 text-left"
                scope="col"
              >
                <span className="sr-only">Feature by</span>
                <span>Plans</span>
              </th>
              {tiers.map((tier) => (
                <th
                  key={tier.name}
                  className="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                  scope="col"
                >
                  {tier.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="border-t border-gray-200 divide-y divide-gray-200">
            <tr>
              <th
                className="py-8 pl-6 pr-6 align-top text-sm font-medium text-gray-900 text-left"
                scope="row"
              >
                Pricing
              </th>
              {tiers.map((tier) => (
                <td key={tier.name} className="h-full py-8 px-6 align-top">
                  <section className="h-full flex flex-col justify-between">
                    <section>
                      <p>
                        <span className="text-4xl font-extrabold text-gray-900">
                          ${tier.priceMonthly}
                        </span>
                        <span className="text-base font-medium text-gray-500">
                          /mo
                        </span>
                      </p>
                      <p className="mt-4 text-sm text-gray-500">
                        {tier.description}
                      </p>
                    </section>
                    <a
                      href={tier.href}
                      className="mt-6 block w-full bg-indigo-600 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
                    >
                      Buy {tier.name}
                    </a>
                  </section>
                </td>
              ))}
            </tr>
            {sections.map((section) => (
              <Fragment key={section.name}>
                <tr>
                  <th
                    className="py-3 pl-6 bg-gray-50 text-sm font-medium text-gray-900 text-left"
                    colSpan={4}
                    scope="colgroup"
                  >
                    {section.name}
                  </th>
                </tr>
                {section.features.map((feature) => (
                  <tr key={feature.name}>
                    <th
                      className="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                      scope="row"
                    >
                      {feature.name}
                    </th>
                    {tiers.map((tier) => (
                      <td key={tier.name} className="py-5 px-6">
                        {typeof feature.tiers[tier.name] === "string" ? (
                          <span className="block text-sm text-gray-700">
                            {feature.tiers[tier.name]}
                          </span>
                        ) : (
                          <>
                            {feature.tiers[tier.name] === true ? (
                              <CheckIcon
                                className="h-5 w-5 text-green-500"
                                aria-hidden="true"
                              />
                            ) : (
                              <MinusIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            )}

                            <span className="sr-only">
                              {feature.tiers[tier.name] === true
                                ? "Included"
                                : "Not included"}{" "}
                              in {tier.name}
                            </span>
                          </>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-gray-200">
              <th className="sr-only" scope="row">
                Choose your plan
              </th>
              {tiers.map((tier) => (
                <td key={tier.name} className="pt-5 px-6">
                  <a
                    href="/"
                    className="block w-full bg-indigo-600 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
                  >
                    Buy {tier.name}
                  </a>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </section>
    </section>
  )
}