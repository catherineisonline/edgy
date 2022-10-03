import { useState } from "react";

export default function JobsTwo() {
  const [emailError, setEmailError] = useState(true);
  const [emailInput, setEmailInput] = useState("");
  const [submitClicked, setSubmitClicked] = useState(false);
  function SubmitEmail() {
    const emailValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if(emailInput.length === 0) {
      return;
    }
    emailValidation.test(emailInput) ? setEmailError(false) : setEmailError(true);
    setSubmitClicked(true);
  }
    return(
        <article className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="inline text-3xl font-extrabold tracking-tight text-white sm:block sm:text-4xl">
          Ready to advance your career?
        </h2>
        <p className="inline text-3xl font-extrabold tracking-tight text-indigo-600 sm:block sm:text-4xl">
          Send us your email and we will contact you.
        </p>
        <form className="mt-8 sm:flex">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            onChange={(e) => setEmailInput(e.target.value)}
            type="text"
            // autoComplete="email"
            // required
            className="w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
          <section className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
          type="button"
                       onClick={SubmitEmail}
              className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Let's do this
            </button>
          </section>
        </form>
        {submitClicked ?  !emailError ?  <p className="py-3 text-green-500">We received your request! Please check you email.</p> :  <p className="py-3 text-red-600">Invalid email. Try again!</p> : null}
      </article>
    )
}