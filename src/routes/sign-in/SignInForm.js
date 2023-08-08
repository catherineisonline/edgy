import { LockClosedIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignInForm({ retrieveDatabase, user, setLoggedIn }) {
  const [formValue, setFormValue] = useState({ email: '', password: '' });
  const [errorValue, setErrorValue] = useState({});
  const [retrievedUser, setRetrievedUser] = useState(true);
  const [rememberOn, setRememberOn] = useState(false);
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    setErrorValue(validateForm(formValue));
    if (Object.keys(validateForm(formValue)).length > 0) {
      return;
    }
    else {
      const retrievedUser = await retrieveDatabase(formValue.email);
      if (retrievedUser === false) {
        setRetrievedUser(false);
        setFormValue({ email: '', password: '' });
        return;
      }
      if (retrievedUser === true) {
        navigate(`/profile`);
        setLoggedIn(true);
        setRetrievedUser(true);
        setFormValue({ email: '', password: '' });
      }
    }
  }

  const handleCheckbox = () => {
    setRememberOn(!rememberOn);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  const validateForm = (value) => {
    const errors = {};
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    retrieveDatabase(value.email);
    if (!value.email) {
      errors.email = "Enter your email";
    }
    else if (!emailRegex.test(value.email)) {
      errors.email = "Invalid email";
    }

    if (!value.password) {
      errors.password = "Password field shouldn't be empty";
    }
    else if (value.password.length < 8) {
      errors.password = "Password must be min. 8 characters";
    }
    else if (retrievedUser && user.password !== value.password) {
      errors.password = "Wrong password";
    }
    return errors;
  }


  return (
    <form onSubmit={submitForm} className="mt-8 space-y-6">
      {retrievedUser ? null : <span className="text-red-400">Such user doesn't exist!</span>}
      <section className="rounded-md shadow-sm -space-y-px">
        <section>
          <label htmlFor="email-address" className="sr-only">
            Email
          </label>
          <input
            onChange={handleChange}
            value={formValue.email}
            id="email-address"
            name="email"
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
            onChange={handleChange}
            value={formValue.password}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
          <span className="text-red-400">{errorValue.password}</span>
        </section>
      </section>

      <section className="flex items-center justify-between">
        <section className="flex items-center">
          <input
            onChange={handleCheckbox}
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-[color:var(--primary-font-color)] focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-white"
          >
            Remember me
          </label>
        </section>

        <section className="text-sm">
          <Link
            to="/forgot-password"
            className="font-medium text-[color:var(--primary-font-color)] hover:text-[color:var(--primary-font-color-hover)]"
          >
            Forgot your password?
          </Link>
        </section>
      </section>

      <section>
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
          Sign in
        </button>
      </section>
    </form>
  )
}