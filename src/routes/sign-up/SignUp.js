import EdgyIcon from "../../assets/images/edgy-icon.png";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";

export default function SignUp() {
  const ResetLocation = () => window.scrollTo(0, 0);
  return (
    <article className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 pt-40 pb-40">
      <section className="max-w-md w-full space-y-8">
        <section>
          <img className="mx-auto h-12 w-auto" src={EdgyIcon} alt="Edgy" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Sign up to start growing
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link
              onClick={ResetLocation}
              to="/sign-in"
              className="font-medium text-[color:var(--primary-font-color)] hover:text-[color:var(--primary-font-color-hover)]"
            >
              sign in
            </Link>
          </p>
        </section>
        <SignUpForm />
      </section>
    </article>
  );
}
