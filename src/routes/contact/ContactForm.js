import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const captchaKey = process.env.REACT_APP_CAPTCHA_KEY;
const captchaSecret = process.env.REACT_APP_CAPTCHA_SECRET;
const serverlUrl = process.env.REACT_APP_SERVER_URL;


export default function ContactForm() {
  const captchaRef = useRef();
  const [formValue, setFormValue] = useState({ firstName: '', lastName: '', email: '', company: '', phone: '', textarea: '' });
  const [formError, setFormError] = useState({})
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(validateForm(formValue))
    setLoading(true);

    if (Object.keys(validateForm(formValue)).length > 0) {
      setLoading(false);
      return null;
    }
    else {

      let captchaToken = captchaRef.current?.getValue();
      if (captchaToken.length === 0) {
        setCaptchaError("ReCaptcha is mandatory")
        setLoading(false);
        return;
      }
      window.scrollTo(0, 0);
      const verify = await verifyCaptcha(captchaToken);
      captchaRef.current?.reset();
      if (verify) {
        setSubmit(true);
        setFormValue({
          firstname: '',
          lastname: '',
          email: '',
          message: '',
        });
        setCaptchaError("")
        setLoading(false);
      }
      else {
        setSubmit(false);
        setFormValue({
          firstname: '',
          lastname: '',
          email: '',
          message: '',
        });
        setCaptchaError("")
        setLoading(false);
      }

    }
  }

  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }


  const verifyCaptcha = async (captchaToken) => {
    try {
      const response = await fetch(serverlUrl, {
        method: 'POST',
        body: JSON.stringify({
          secret: captchaSecret,
          captchaToken
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 200) {
        return true;
      }
      else {
        return false;
      }
    }
    catch (error) {
      console.error("Could not verify captcha!", error.message);
      return false;
    }
  }
  const validateForm = (value) => {
    let errors = {}
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const numberRegex = /\d/;
    if (!value.firstName) {
      errors.firstName = "Please enter first name!"
    }
    else if (value.firstName && value.firstName.length < 3) {
      errors.firstName = "First name is too short"
    }
    if (!value.lastName) {
      errors.lastName = "Please enter last name!"
    }
    else if (value.lastName && value.lastName.length < 3) {
      errors.lastName = "Last name is too short"
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
    else if (value.company && value.company.length < 3) {
      errors.company = "Please enter a valid company name"
    }
    if (!value.phone) {
      errors.phone = "Please enter phone number!"
    }
    else if (!numberRegex.test(value.phone)) {
      errors.phone = "Please enter valid phone number!"
    }
    if (!value.textarea) {
      errors.textarea = "Please enter message!"
    }
    else if (value.textarea && value.textarea.length < 10) {
      errors.textarea = "The message should be min. 10 characters"
    }

    return errors;
  }



  return (
    <React.Fragment>
      {loading ?
        <div role="status">
          <svg aria-hidden="true" className="w-40 h-40 mt-6 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
        :
        submit && Object.keys(formError).length === 0 ?
          <p className="font-medium text-green-600 text-lg py-10">Thank you submitting your request. We will review your message and contact you shortly!</p>
          :
          <form
            onSubmit={handleSubmit}
            className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 text-white"
          >
            <section>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-white"
              >
                First name *
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
                Last name *
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
                Email *
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
                  How can we help you? *
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
            <ReCAPTCHA ref={captchaRef} sitekey={captchaKey} />
            <span className="text-red-400">{captchaError}</span>
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