import { useState } from "react";
import { Link } from "react-router-dom";

export default function Newsletter() {
  const [emailError, setEmailError] = useState(true);
  const [emailInput, setEmailInput] = useState("");
  const [submitClicked, setSubmitClicked] = useState(false);

  const ResetLocation = () => window.scrollTo(0, 0);
  function SubmitEmail() {
    const emailValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (emailInput.length === 0) {
      return;
    }
    emailValidation.test(emailInput) ? setEmailError(false) : setEmailError(true);
    setSubmitClicked(true);
  }
  return (
    <article className="bg-gray-900">
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
        <section className="lg:w-0 lg:flex-1">
          <h2
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            id="newsletter-headline"
          >
            Sign up for our newsletter
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat.
          </p>
        </section>
        <section className="mt-8 lg:mt-0 lg:ml-8">
          <form className="sm:flex">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email-address"
              type="text"
              onChange={(e) => setEmailInput(e.target.value)}
              className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
              placeholder="Enter your email"
            />
            <section className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                onClick={SubmitEmail}
                type="button"
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
              >
                Notify me
              </button>
            </section>

          </form>
          {submitClicked ? !emailError ? <p className="py-3 text-green-500">You have successfully signed up for the newsletter!</p> : <p className="py-3 text-red-600">Invalid email. Try again!</p> : null}
          <p className="mt-3 text-sm text-gray-300">
            We care about the protection of your data. Read our{" "}
            <Link onClick={ResetLocation} to="/privacy" className="text-white font-medium underline">
              Privacy Policy.
            </Link>
          </p>
        </section>
      </section>
    </article>
  );
}
