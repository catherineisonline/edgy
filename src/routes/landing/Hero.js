import { Link } from 'react-router-dom'
import InstagramCover from '../../assets/images/instagram-icon-cover.png'
import { useState } from 'react'

export default function Hero() {
  const [emailError, setEmailError] = useState(true)
  const [emailInput, setEmailInput] = useState('')
  const [submitClicked, setSubmitClicked] = useState(false)

  const ResetLocation = () => window.scrollTo(0, 0)
  function SubmitEmail() {
    const emailValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    if (emailInput.length === 0) {
      setEmailError(true)
    }
    emailValidation.test(emailInput)
      ? setEmailError(false)
      : setEmailError(true)
    setSubmitClicked(true)
  }
  return (
    <article className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <section className="mx-auto max-w-7xl lg:px-8">
        <section className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* CONTENT SECTION */}
          <section className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <section className="lg:py-24">
              <h1 className="mt-4 text-5xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">Edgy</span>
                <span className="block text-indigo-400">
                  your Instagram growth secret
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat.
              </p>
              <section className="mt-10 sm:mt-12">
                <form className="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <section className="sm:flex">
                    <section className="min-w-0 flex-1">
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email"
                        type="text"
                        onChange={(e) => setEmailInput(e.target.value)}
                        placeholder="Enter your email"
                        className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                      />
                    </section>
                    <section className="mt-3 sm:mt-0 sm:ml-3">
                      <button
                        type="button"
                        onClick={SubmitEmail}
                        className="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2  focus:ring-offset-gray-900"
                      >
                        Start free trial
                      </button>
                    </section>
                  </section>
                  {submitClicked ? (
                    !emailError ? (
                      <p className="py-3 text-green-500">
                        You have successfully applied for free trial! Please
                        check your email
                      </p>
                    ) : (
                      <p className="py-3 text-red-600">
                        Invalid email. Try again!
                      </p>
                    )
                  ) : null}
                  <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                    Start your free 14-day trial, no credit card necessary. By
                    providing your email, you agree to our{' '}
                    <Link
                      to="/terms"
                      className="font-medium text-white"
                      onClick={ResetLocation}
                    >
                      terms of service
                    </Link>
                    .
                  </p>
                </form>
              </section>
            </section>
          </section>
          {/* IMAGE SECTION */}
          <section className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <section className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <img
                className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-90 lg:w-90 lg:max-w-none opacity-60"
                src={InstagramCover}
                alt=""
                aria-hidden="true"
              />
            </section>
          </section>
        </section>
      </section>
    </article>
  )
}
