export default function Contact() {
  return (
    <main className="bg-gray-900">
      {/* Contact Section */}
      <article className="relative bg-gray-900">
        <section className="lg:absolute lg:inset-0">
          <section className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
            />
          </section>
        </section>
        <section className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
          <section className="lg:pr-8">
            <section className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                Let's work together
              </h2>
              <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                We’d love to hear from you! Send us a message using the form
                opposite, or email us. We’d love to hear from you! Send us a
                message using the form opposite, or email us.
              </p>
              <form
                action="#"
                method="POST"
                className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 text-white"
              >
                <section>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-white"
                  >
                    First Name
                  </label>
                  <section className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="text-gray-900 block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md p-2"
                    />
                  </section>
                </section>
                <section>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-white"
                  >
                    Last Name
                  </label>
                  <section className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className=" text-gray-900 block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md p-2"
                    />
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
                      type="email"
                      autoComplete="email"
                      className="text-gray-900 block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md p-2"
                    />
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
                      id="company"
                      autoComplete="organization"
                      className="text-gray-900 block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md p-2"
                    />
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
                    <span id="phone-description" className="text-sm text-white">
                      (Optional)
                    </span>
                  </section>
                  <section className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      className="text-gray-900 block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md p-2"
                    />
                  </section>
                </section>
                <section className="sm:col-span-2">
                  <section className="flex justify-between">
                    <label
                      htmlFor="how-can-we-help"
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
                      name="how-can-we-help"
                      aria-describedby="how-can-we-help-description"
                      rows={4}
                      className="text-gray-900 block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border border-gray-300 rounded-md"
                      defaultValue={""}
                    />
                  </section>
                </section>

                <section className="sm:col-span-2">
                  <label
                    htmlFor="how-did-you-hear-about-us"
                    className="block text-sm font-medium capitalize text-white"
                  >
                    How did you hear about us?
                  </label>
                  <section className="mt-1">
                    <input
                      type="text"
                      name="how-did-you-hear-about-us"
                      id="how-did-you-hear-about-us"
                      className="text-gray-900 shadow-sm focus:ring-grape-500 focus:border-grape-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                    />
                  </section>
                </section>
                <section className="text-right sm:col-span-2">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </section>
              </form>
            </section>
          </section>
        </section>
      </article>

      {/* CTA Section */}
      <article className="bg-grape-400">
        <section className="max-w-md mx-auto text-center py-16 px-4 sm:max-w-2xl sm:py-24 sm:px-6 lg:px-8 lg:py-32">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            <span className="block text-white">Looking for a new career?</span>
            <span className="block text-indigo-600">We’re hiring.</span>
          </h2>
          <a
            href="/jobs"
            className="mt-8 w-full inline-flex items-center justify-center py-3 px-5 bg-white border border-transparent rounded-md shadow-md text-base font-medium text-grape-600 hover:bg-grape-50 sm:w-auto"
          >
            See open positions
          </a>
        </section>
      </article>
    </main>
  );
}
