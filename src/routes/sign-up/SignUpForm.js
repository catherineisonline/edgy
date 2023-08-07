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
  // const [submit, setSubmit] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    setErrorValue(validateForm(formValue));
    if (Object.keys(validateForm(formValue)).length > 0) {
      return null;
    }
    else {
      // setSubmit(true);
      await registerUser(formValue);
      setFormValue({
        email: '',
        fullname: '',
        password: '',
        repeatPassword: '',
      });
      navigate('/sign-in');
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
    <form onSubmit={submitForm} className="mt-8 space-y-6">
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
    </form>
  )
}