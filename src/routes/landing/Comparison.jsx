import { Fragment } from "react";
import { pricingTiers } from "../../data/pricingTiers";
import { pricingSections } from "../../data/pricingSections";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Comparison({ loggedIn }) {
  return (
    <article className="bg-gray-900">
      <section className="max-w-7xl mx-auto bg-white py-16 sm:py-24 sm:px-6 lg:px-8">
        <section className="max-w-2xl mx-auto space-y-16 lg:hidden">
          {pricingTiers.map((tier, tierIdx) => (
            <section key={tier.name}>
              <section className="px-4 mb-8">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  {tier.name}
                </h2>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">
                    ${tier.priceMonthly}
                  </span>{" "}
                  <span className="text-base font-medium text-gray-500">
                    /mo
                  </span>
                </p>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <Link
                  to={loggedIn ? "/profile" : "/sign-up"}
                  className="block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
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
                        className="border-t border-gray-200">
                        <th
                          className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                          scope="row">
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
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="ml-auto h-5 w-5 text-green-500">
                                  <path
                                    fillRule="evenodd"
                                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="ml-auto h-5 w-5 text-gray-400">
                                  <path
                                    fillRule="evenodd"
                                    d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                                    clipRule="evenodd"
                                  />
                                </svg>
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

              <section
                className={classNames(
                  tierIdx < pricingTiers.length - 1 ? "py-5 border-b" : "pt-5",
                  "border-t border-gray-200 px-4"
                )}>
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  to={loggedIn ? "/profile" : "/sign-up"}
                  className="block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                  Buy {tier.name}
                </Link>
              </section>
            </section>
          ))}
        </section>
        <section className="hidden lg:block">
          <table className="w-full h-px table-fixed">
            <caption className="sr-only">Pricing plan comparison</caption>
            <thead>
              <tr>
                <th
                  className="pb-4 px-6 text-sm font-medium text-gray-900 text-left"
                  scope="col">
                  <span className="sr-only">Feature by</span>
                  <span>Plans</span>
                </th>
                {pricingTiers.map((tier) => (
                  <th
                    key={tier.name}
                    className="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                    scope="col">
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border-t border-gray-200 divide-y divide-gray-200">
              <tr>
                <th
                  className="py-8 px-6 text-sm font-medium text-gray-900 text-left align-top"
                  scope="row">
                  Pricing
                </th>
                {pricingTiers.map((tier) => (
                  <td key={tier.name} className="h-full py-8 px-6 align-top">
                    <section className="relative h-full flex flex-col justify-between">
                      <p>
                        <span className="text-4xl font-extrabold text-gray-900">
                          ${tier.priceMonthly}
                        </span>{" "}
                        <span className="text-base font-medium text-gray-500">
                          /mo
                        </span>
                      </p>
                      <p className="mt-4 mb-16 text-sm text-gray-500">
                        {tier.description}
                      </p>
                      <Link
                        onClick={() => window.scrollTo(0, 0)}
                        to={loggedIn ? "/profile" : "/sign-up"}
                        className="block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
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
                      className="bg-gray-50 py-3 pl-6 text-sm font-medium text-gray-900 text-left"
                      colSpan={4}
                      scope="colgroup">
                      {section.name}
                    </th>
                  </tr>
                  {section.features.map((feature) => (
                    <tr key={feature.name}>
                      <th
                        className="py-5 px-6 text-sm font-normal text-gray-500 text-left"
                        scope="row">
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
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="h-5 w-5 text-green-500">
                                  <path
                                    fillRule="evenodd"
                                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="h-5 w-5 text-gray-400">
                                  <path
                                    fillRule="evenodd"
                                    d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                                    clipRule="evenodd"
                                  />
                                </svg>
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
                      className="block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                      Buy {tier.name}
                    </Link>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </section>
      </section>
    </article>
  );
}
