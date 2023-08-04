import { Link } from 'react-router-dom'
import InstagramCover from '../../assets/images/instagram-icon-cover.png'
import { useState } from 'react'
import React from 'react';

export default function Hero() {
  const [formValue, setFormValue] = useState({ email: '' });
  const [formError, setFormError] = useState({});
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);

  const ResetLocation = () => window.scrollTo(0, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormError(validateForm(formValue))
    if (Object.keys(validateForm(formValue)).length > 0) {
      setLoading(false);
      return null;
    }
    else {
      setSubmit(true);
      setFormValue({ email: '' });
      setLoading(false);
    }
  }
  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  const validateForm = (value) => {
    const errors = {};
    const emailValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    if (!value.email) {
      errors.email = "Empty email field"
    }
    else if (!emailValidation.test(value.email)) {
      errors.email = "Invalid email format"
    }
    return errors;
  }
  return (

    <article className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden" >
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
                Boost your popularity on Instagram with our premium package that
                will skyrocket your profile engagement!
              </p>
              <section className="mt-10 sm:mt-12">
                {loading ?
                  <React.Fragment>
                    <div role="status">
                      <svg aria-hidden="true" className="w-10 h-10 mt-6 text-gray-200 animate-spin dark:text-gray-600 fill-indigo-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  </React.Fragment>
                  :
                  submit && Object.keys(formError).length === 0 ?
                    <p className='font-medium text-green-600 sm:text-xl lg:text-lg xl:text-xl'>Hold tight! Our representative will contact you shortly via email</p> :
                    <form onSubmit={handleSubmit} className="sm:max-w-xl sm:mx-auto lg:mx-0">
                      <section className="sm:flex">
                        <section className="min-w-0 flex-1">
                          <label htmlFor="email" className="sr-only">
                            Email address
                          </label>
                          <input
                            id="trial-email"
                            name="email"
                            type="text"
                            value={formValue.email}
                            onChange={handleValidation}
                            placeholder="Enter your email"
                            className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                          />
                          <span className="text-red-400 mt-6">{formError.email}</span>
                        </section>
                        <section className="mt-3 sm:mt-0 sm:ml-3">
                          <button
                            type="submit"
                            className="mt-3 sm:mt-0 sm:ml-3 block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2  focus:ring-offset-gray-900"
                          >
                            Start free trial
                          </button>
                        </section>
                      </section>
                      <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                        Start your free 14-day trial, no credit card necessary. By
                        providing your email, you agree to our
                        <Link
                          to="/terms"
                          className="font-medium text-white"
                          onClick={ResetLocation}> terms of service</Link>.
                      </p>
                    </form>
                }
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
