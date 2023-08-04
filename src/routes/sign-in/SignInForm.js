import { LockClosedIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

export default function SignInForm() {
  return (
    <form className="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" defaultValue="true" />
      <section className="rounded-md shadow-sm -space-y-px">
        <section>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
        </section>
        <section>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
        </section>
      </section>

      <section className="flex items-center justify-between">
        <section className="flex items-center">
          <input
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