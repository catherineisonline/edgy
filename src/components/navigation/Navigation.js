import EdgyIcon from "../../assets/images/edgy-icon.png";
import { Link, NavLink } from "react-router-dom";

const links = [
  { name: "About", href: "/edgy/about" },
  { name: "Pricing", href: "/edgy/pricing" },
  { name: "Blog", href: "/edgy/blog" },
  { name: "FAQ", href: "/edgy/faq" },
  { name: "Contact", href: "/edgy/contact" },
];

export default function Navigation() {
  return (
    <header className="bg-gray-900">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <section className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <section className="flex items-center">
            <a href="/edgy">
              <span className="sr-only">Edgy</span>
              <img className="h-10 w-auto" src={EdgyIcon} alt="Edgy" />
            </a>
            <section className="hidden ml-10 space-x-8 lg:block">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  {link.name}
                </NavLink>
              ))}
            </section>
          </section>
          <section className="ml-10 space-x-4">
            <Link to="edgy/sign-in" className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">
              Sign in
            </Link>
            <Link to="edgy/sign-up" className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50">
              Sign up
            </Link>
          </section>
        </section>
        <section className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </NavLink>
          ))}
        </section>
      </nav>
    </header>
  );
}
