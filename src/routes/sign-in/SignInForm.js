import { LockClosedIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignInForm({ retrieveDatabase, setLoggedIn }) {
  const [formValue, setFormValue] = useState({ email: '', password: '' });
  const [errorValue, setErrorValue] = useState({});
  const [loading, setLoading] = useState(false);
  const [retrievedUser, setRetrievedUser] = useState(true);
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    //validate form before sending to server
    setErrorValue(validateForm(formValue));
    //if validation object is not empty stop loading and sign in process
    if (Object.keys(validateForm(formValue)).length > 0) {
      setLoading(false);
      return;
    }
    else {
      //otherwise send info to the server and check if the user exists
      const retrievedUser = await retrieveDatabase(formValue.email, formValue.password);
      if (retrievedUser === false) {
        setRetrievedUser(false);
        setLoading(false);
        setFormValue({ email: '', password: '' });
        return;
      }
      if (retrievedUser === true) {
        setLoading(false);
        navigate(`/profile`);
        window.scrollTo(0, 0)
        setLoggedIn(true);
        setRetrievedUser(true);
        setFormValue({ email: '', password: '' });
      }
    }
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  const validateForm = (value) => {
    const errors = {};
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
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
    if (!value.email && value.password) {
      errors.email = "Enter your email";
    }

    return errors;
  }


  return (
    <React.Fragment >
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
          <form onSubmit={submitForm} className="mt-8 space-y-6" >
            {retrievedUser ? null : <span className="text-red-400">The user doesn't exist or you entered a wrong email/password</span>}
            <section className="rounded-md shadow-sm -space-y-px" >
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
          </form>}
    </React.Fragment>
  )
}