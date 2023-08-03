import EdgyIcon from "../../assets/images/edgy-icon.png";
import { Link } from "react-router-dom";

const links = [
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const ResetLocation = () => window.scrollTo(0, 0);
  return (
    <header className="bg-gray-900">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <section className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <section className="flex items-center">
            <Link to="/" onClick={ResetLocation}>
              <span className="sr-only">Edgy</span>
              <img className="h-10 w-auto" src={EdgyIcon} alt="Edgy" />
            </Link>
            <section className="hidden ml-10 space-x-8 lg:block">
              {links.map((link) => (
                <Link
                  onClick={ResetLocation}
                  key={link.name}
                  to={link.href}
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  {link.name}
                </Link>
              ))}
            </section>
          </section>
          <section className="ml-10 space-x-4">
            <Link onClick={ResetLocation} to="edgy/sign-in" className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">
              Sign in
            </Link>
            <Link onClick={ResetLocation} to="edgy/sign-up" className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50">
              Sign up
            </Link>
          </section>
        </section>
        <section className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {links.map((link) => (
            <Link
              onClick={ResetLocation}
              key={link.name}
              to={link.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </Link>
          ))}
        </section>
      </nav>
    </header>
  );
}
