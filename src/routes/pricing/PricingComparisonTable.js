import React, { Fragment } from "react";
import { CheckIcon, MinusIcon } from "@heroicons/react/solid";
import { pricingSections } from "../../data/pricingSections";
import { pricingTiers } from "../../data/pricingTiers";
import { Link } from "react-router-dom";


export default function PricingComparisonTable({ loggedIn }) {
  return (
    <section className="max-w-2xl mx-auto bg-white py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      {/* xs to lg */}
      <section className="space-y-24 lg:hidden">
        {pricingTiers.map((tier) => (
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
              <Link
                to={loggedIn ? "/profile" : "/sign-up"}
                onClick={window.scrollTo(0, 0)}
                className="block w-full bg-indigo-600 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
              >
                Buy {tier.name}
              </Link>
            </section>
            {pricingSections.map((section) => (
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
                          <React.Fragment>
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
                          </React.Fragment>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}

            <section className="border-t border-gray-200 px-4 pt-5">
              <Link
                to={loggedIn ? "/profile" : "/sign-up"}
                onClick={window.scrollTo(0, 0)}
                className="block w-full bg-indigo-600 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
              >
                Buy {tier.name}
              </Link>
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
              {pricingTiers.map((tier) => (
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
              {pricingTiers.map((tier) => (
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
                    <Link
                      to={loggedIn ? "/profile" : "/sign-up"}
                      onClick={window.scrollTo(0, 0)}
                      className="block w-full bg-indigo-600 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
                    >
                      Buy {tier.name}
                    </Link>
                  </section>
                </td>
              ))}
            </tr>
            {pricingSections.map((section) => (
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
                    {pricingTiers.map((tier) => (
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
              {pricingTiers.map((tier) => (
                <td key={tier.name} className="pt-5 px-6">
                  <Link
                    to={loggedIn ? "/profile" : "/sign-up"}
                    onClick={window.scrollTo(0, 0)}
                    className="block w-full bg-indigo-600 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
                  >
                    Buy {tier.name}
                  </Link>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </section>
    </section>
  )
}