/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

const StandardFeatures = [
  'Organic Follower Growth: Gain real, engaged followers through genuine interactions and personalized strategies, helping you build a loyal community.',
  "Content Optimization: Receive tailored content recommendations to enhance your feed's visual appeal and captivate your target audience.",
  "Hashtag Research: Unlock the potential of strategic hashtags to boost your posts' discoverability and increase your reach",
]
const PremiumFeatures = [
  "Community Engagement: Our team proactively engages with your followers, responding to comments, and fostering genuine connections on your behalf.",
  "Monthly Progress Report: Stay updated on your Instagram growth journey with a comprehensive monthly progress report, showcasing key metrics and insights.",
  "Customized Strategy: Receive a tailor-made growth strategy designed specifically for your niche and target audience.",
  "Influencer Outreach: Tap into our network of influencers for collaborations and shout-outs to gain exposure to a broader audience.",
  "Story Management: Maximize the potential of Instagram Stories with engaging content and highlights to captivate your followers.",
]
const BusinessFeatures = [
  "Competitor Analysis: Gain insights into your competitors' performance to identify opportunities and stay ahead of the curve.",
  "Post Optimization Suggestions: Receive recommendations for optimizing your post timings and content to maximize engagement.",
  "Exclusive Early Access: Get exclusive early access to new features and updates before they're rolled out to other plans.",
]

export default function Pricing({ loggedIn }) {
  const ResetLocation = () => window.scrollTo(0, 0)
  return (
    <article className="bg-gray-900">
      <section className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20 bg-gray-900">
        <section className="text-center">
          <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
            Pricing
          </h2>
          <h3 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Instagram Growth Plans
          </h3>
          <p className="mt-3 max-w-4xl mx-auto text-xl text-gray-300 sm:mt-5 sm:text-2xl">
            Various plans depending on your needs, capabiltiies, dreams and
            business goals
          </p>
        </section>
      </section>

      <section className="mt-16 gray-900 pb-12 lg:mt-20 lg:pb-20">
        <section className="relative z-0">
          <section className="absolute inset-0 h-5/6 bg-gray-900 lg:h-2/3" />
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section className="relative lg:grid lg:grid-cols-7">
              <section className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                <section className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                  <section className="flex-1 flex flex-col">
                    <section className="bg-white px-6 py-10">
                      <section>
                        <h3
                          className="text-center text-2xl font-medium text-gray-900"
                          id="tier-hobby"
                        >
                          Standard
                        </h3>
                        <section className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                            <span className="mt-2 mr-2 text-4xl font-medium">
                              $
                            </span>
                            <span className="font-extrabold">79</span>
                          </span>
                          <span className="text-xl font-medium text-gray-500">
                            /month
                          </span>
                        </section>
                      </section>
                    </section>
                    <section className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul className="space-y-4">
                        {StandardFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <section className="flex-shrink-0">
                              <CheckIcon
                                className="flex-shrink-0 h-6 w-6 text-green-500"
                                aria-hidden="true"
                              />
                            </section>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <section className="mt-8">
                        <section className="rounded-lg shadow-md">
                          <Link
                            onClick={ResetLocation}
                            to={loggedIn ? "/profile" : "/sign-up"}
                            className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-[color:var(--primary-font-color)] hover:bg-gray-50"
                            aria-describedby="tier-hobby"
                          >
                            Get Started
                          </Link>
                        </section>
                      </section>
                    </section>
                  </section>
                </section>
              </section>
              <section className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                <section className="relative z-10 rounded-lg shadow-xl">
                  <section
                    className="pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-600"
                    aria-hidden="true"
                  />
                  <section className="absolute inset-x-0 top-0 transform translate-y-px">
                    <section className="flex justify-center transform -translate-y-1/2">
                      <span className="inline-flex rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                        In Demand
                      </span>
                    </section>
                  </section>
                  <section className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                    <section>
                      <h3
                        className="text-center text-3xl font-semibold text-gray-900 sm:-mx-6"
                        id="tier-growth"
                      >
                        Premium
                      </h3>
                      <section className="mt-4 flex items-center justify-center">
                        <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl">
                          <span className="mt-2 mr-2 text-4xl font-medium">
                            $
                          </span>
                          <span className="font-extrabold">149</span>
                        </span>
                        <span className="text-2xl font-medium text-gray-500">
                          /month
                        </span>
                      </section>
                    </section>
                  </section>
                  <section className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                    <ul className="space-y-4">
                      {PremiumFeatures.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <section className="flex-shrink-0">
                            <CheckIcon
                              className="flex-shrink-0 h-6 w-6 text-green-500"
                              aria-hidden="true"
                            />
                          </section>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <section className="mt-10">
                      <section className="rounded-lg shadow-md">
                        <Link
                          onClick={ResetLocation}
                          to={loggedIn ? "/profile" : "/sign-up"}
                          className="block w-full text-center rounded-lg border border-transparent bg-indigo-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-indigo-700"
                          aria-describedby="tier-growth"
                        >
                          Get Started
                        </Link>
                      </section>
                    </section>
                  </section>
                </section>
              </section>
              <section className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                <section className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                  <section className="flex-1 flex flex-col">
                    <section className="bg-white px-6 py-10">
                      <section>
                        <h3
                          className="text-center text-2xl font-medium text-gray-900"
                          id="tier-scale"
                        >
                          Business
                        </h3>
                        <section className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                            <span className="mt-2 mr-2 text-4xl font-medium">
                              $
                            </span>
                            <span className="font-extrabold">349</span>
                          </span>
                          <span className="text-xl font-medium text-gray-500">
                            /month
                          </span>
                        </section>
                      </section>
                    </section>
                    <section className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul className="space-y-4">
                        {BusinessFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <section className="flex-shrink-0">
                              <CheckIcon
                                className="flex-shrink-0 h-6 w-6 text-green-500"
                                aria-hidden="true"
                              />
                            </section>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <section className="mt-8">
                        <section className="rounded-lg shadow-md">
                          <Link
                            onClick={ResetLocation}
                            to={loggedIn ? "/profile" : "/sign-up"}
                            className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-[color:var(--primary-font-color)] hover:bg-gray-50"
                            aria-describedby="tier-scale"
                          >
                            Get Started
                          </Link>
                        </section>
                      </section>
                    </section>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </article>
  )
}
