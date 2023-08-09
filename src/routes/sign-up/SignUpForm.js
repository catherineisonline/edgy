import { LockClosedIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function SignUpForm({ registerUser }) {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    email: '',
    fullname: '',
    password: '',
    repeatPassword: '',
  });
  const [errorValue, setErrorValue] = useState({});
  const [userExists, setUserExists] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    //basic validation
    setErrorValue(validateForm(formValue));
    //if error object isn't empty stop the process
    if (Object.keys(validateForm(formValue)).length > 0) {
      setLoading(false);
      return null;
    }
    //otherwise check if user registration on the server returns OK and reset the form
    else {
      const registerationSuccess = await registerUser(formValue);
      setFormValue({
        email: '',
        fullname: '',
        password: '',
        repeatPassword: '',
      });
      if (registerationSuccess) {
        setLoading(false);
        setUserExists(false);
        navigate('/sign-in');
        window.scrollTo(0, 0)
      }
      else {
        setLoading(false);
        setUserExists(true);
      }

    }
  }


  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }


  const validateForm = (value) => {
    const errors = {};
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!value.email) {
      errors.email = "Enter the email"
    }
    else if (!emailRegex.test(value.email)) {
      errors.email = "The email is not valid"
    }
    if (!value.password) {
      errors.password = "Password field is required"
    }
    if (!value.repeatPassword) {
      errors.repeatPassword = "Password field is required"
    }
    if (value.password.length < 8 && value.password) {
      errors.password = "Password must be min. 8 characters"
    }
    if (value.repeatPassword < 8 && value.repeatPassword) {
      errors.repeatPassword = "Password must be min. 8 characters"
    }
    else if (value.password && value.repeatPassword && value.password !== value.repeatPassword) {
      errors.password = "Passwords don't match";
      errors.repeatPassword = "Passwords don't match";
    }
    if (!value.fullname) {
      errors.fullname = "Enter your full name"
    }

    return errors;
  }

  return (
    <React.Fragment>
      {
        loading ?
          <div role="status" className="flex flex-col gap-4 items-center">
            <p className="text-indigo-400 text-xl">Almost there...</p>
            <svg aria-hidden="true" className="w-10 h-10 mt-6 text-gray-200 animate-spin dark:text-gray-600 fill-indigo-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
          </div>
          :
          <form onSubmit={submitForm} className="mt-8 space-y-6">
            {userExists !== undefined && userExists ? <span className="text-red-400">A user with such email already exists</span> : null}
            <section>
              <label htmlFor="fullname" className="sr-only">
                Full name
              </label>
              <input
                onChange={handleForm}
                value={formValue.fullname}
                id="fullname"
                name="fullname"
                type="text"
                autoComplete="full-name"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full name"
              />
              <span className="text-red-400">{errorValue.fullname}</span>
            </section>
            <section>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                onChange={handleForm}
                value={formValue.email}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
              <span className="text-red-400">{errorValue.email}</span>
            </section>
            <section>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                onChange={handleForm}
                value={formValue.password}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"

              />
              <span className="text-red-400">{errorValue.password}</span>
            </section>
            <section>
              <label htmlFor="repeatPassword" className="sr-only">
                Reapeat password
              </label>
              <input
                onChange={handleForm}
                value={formValue.repeatPassword}
                id="repeatPassword"
                name="repeatPassword"
                type="password"
                autoComplete="current-password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Reapeat password"
              />
              <span className="text-red-400">{errorValue.repeatPassword}</span>
            </section>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-[color:var(--primary-font-color)] group-hover:text-[color:var(--primary-font-color-hover)]"
                  aria-hidden="true"
                />
              </span>
              Sign up
            </button>
          </form>}
    </React.Fragment>
  )
}