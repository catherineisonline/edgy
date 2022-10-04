import { NavLink } from "react-router-dom";
import Linkedin from '../../assets/socials/linkedin-pink.svg'
import Github from '../../assets/socials/github-pink.svg'
import Portfolio from '../../assets/socials/portfolio.png'

const navigation = {
  solutions: [
    { name: "+1 202 555 0186", href: "tel:+1-202-555-0186" },
    { name: "+44 1632 960362", href: "tel:+44-1632-960362" },
    { name: "support@edgy.com", href: "mailto:support@edgy.com" },
  ],
  support: [
    { name: "Pricing", href: "/edgy/pricing" },
    { name: "FAQ", href: "/edgy/faq" },
    { name: "Contact", href: "/edgy/contact" },
  ],
  company: [
    { name: "About", href: "/edgy/about" },
    { name: "Blog", href: "/edgy/blog" },
    { name: "Jobs", href: "/edgy/jobs" },
  ],
  legal: [
    { name: "Terms", href: "/edgy/terms" },
    { name: "Privacy", href: "/edgy/privacy" },
    { name: "Refunds", href: "/edgy/refunds" },
  ],
  social: [
    {
      name: "Github",
      href: "https://github.com/catherineisonline/edgy",
      icon: Github
    },
    {
      name: "Portfolio",
      href: "https://ekaterine-mitagvaria.vercel.app/",
      icon: Portfolio
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/catherinemitagvaria/",
      icon: Linkedin
    },
  ],
};

export default function Footer() {
  const ResetLocation = () => window.scrollTo(0, 0);

  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <section className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          <section className="grid grid-cols-2 gap-8 xl:col-span-4">
            <section className="md:grid md:grid-cols-2 md:gap-8">
              <section>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        onClick={ResetLocation}
                        to={item.href}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        onClick={ResetLocation}
                        to={item.href}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </section>
            </section>
            <section className="md:grid md:grid-cols-2 md:gap-8">
              <section>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        onClick={ResetLocation}
                        to={item.href}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        onClick={ResetLocation}
                        to={item.href}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </section>
            </section>
          </section>
        </section>

        <section className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <section className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">{item.name}</span>
                <img className="h-6 w-6" aria-hidden="true" src={item.icon} alt={item.icon} />
              </a>
            ))}
          </section>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2022 Edgy, Inc. All rights reserved.
          </p>
        </section>
      </section>
    </footer>
  );
}
