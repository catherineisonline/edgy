import React, { useState } from "react";

export default function ContactForm() {
  const [formValue, setFormValue] = useState({ firstName: '', lastName: '', email: '', company: '', phone: '', textarea: '' });
  const [formError, setFormError] = useState({})
  const [submit, setSubmit] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validateForm(formValue))
    setSubmit(true);
  }

  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value })
  }
  const validateForm = (value) => {
    let errors = {}
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!value.firstName) {
      errors.firstName = "Please enter first name!"
    }
    if (!value.lastName) {
      errors.lastName = "Please enter last name!"
    }
    if (!value.email) {
      errors.email = "Please enter email!"
    }
    else if (!emailRegex.test(value.email)) {
      errors.email = "Please enter valid email!"
    }
    if (!value.company) {
      errors.company = "Please enter company!"
    }
    if (!value.phone) {
      errors.phone = "Please enter phone!"
    }
    if (!value.textarea) {
      errors.textarea = "Please enter message!"
    }

    return errors;
  }



  return (
    <React.Fragment>
      {submit && Object.keys(formError).length === 0 ?
        <p className="font-medium text-green-600 text-lg py-10">Thank you submitting your request. We will review your message and contact you shortly!</p> :
        <form
          onSubmit={handleSubmit}
          className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 text-white"
        >
          <section>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-white"
            >
              First Name
            </label>
            <section className="mt-1">
              <input
                type="text"
                value={formValue.firstName}
                onChange={handleValidation}
                name="firstName"
                id="first-name"
                autoComplete="given-name"
                className="text-gray-900 block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md p-2"
              />
              <span className="text-red-400">{formError.firstName}</span>
            </section>
          </section>
          <section>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-white"
            >
              Last Name
            </label>
            <section className="mt-1">
              <input
                type="text"
                name="lastName"
                value={formValue.lastName}
                onChange={handleValidation}
                id="last-name"
                autoComplete="family-name"
                className=" text-gray-900 block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md p-2"
              />
              <span className="text-red-400">{formError.lastName}</span>
            </section>
          </section>
          <section className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <section className="mt-1">
              <input
                id="email"
                name="email"
                value={formValue.email}
                onChange={handleValidation}
                type="text"
                autoComplete="email"
                className="text-gray-900 block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md p-2"
              />
              <span className="text-red-400">{formError.email}</span>
            </section>
          </section>
          <section className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-medium text-white"
            >
              Company
            </label>
            <section className="mt-1">
              <input
                type="text"
                name="company"
                value={formValue.company}
                onChange={handleValidation}
                id="company"
                autoComplete="organization"
                className="text-gray-900 block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md p-2"
              />
              <span className="text-red-400">{formError.company}</span>
            </section>
          </section>
          <section className="sm:col-span-2">
            <section className="flex justify-between">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-white"
              >
                Phone
              </label>
            </section>
            <section className="mt-1">
              <input
                type="text"
                name="phone"
                value={formValue.phone}
                onChange={handleValidation}
                id="phone"
                autoComplete="tel"
                aria-describedby="phone-description"
                className="text-gray-900 block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md p-2"
              />
              <span className="text-red-400">{formError.phone}</span>
            </section>
          </section>
          <section className="sm:col-span-2">
            <section className="flex justify-between">
              <label
                htmlFor="textarea"
                className="block text-sm font-medium text-white"
              >
                How Can We Help You?
              </label>
              <span
                id="how-can-we-help-description"
                className="text-sm text-white"
              >
                (Max. 500 Characters)
              </span>
            </section>
            <section className="mt-1">
              <textarea
                id="how-can-we-help"
                name="textarea"
                value={formValue.textarea}
                onChange={handleValidation}
                aria-describedby="how-can-we-help-description"
                rows={4}
                className="text-gray-900 block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border border-gray-300 rounded-md"
              />
              <span className="text-red-400">{formError.textarea}</span>
            </section>
          </section>
          <section className="text-right sm:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </section>
        </form>}
    </React.Fragment>


  )
}