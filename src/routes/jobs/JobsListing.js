import jobs from "../../data/jobs";

export default function JobsListing() {
  return (
    <article className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <section className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        <section className="space-y-5 sm:space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Jobs
          </h2>
          <p className="text-xl text-gray-500">
            Edgy is the global leader in social media management. We power
            social media for brands and organizations around the world, from the
            smallest businesses to the largest enterprises. Our unparalleled
            expertise in social media management, social insights, employee
            advocacy, and social customer care empowers organizations to
            strategically grow their brands, businesses, and customer
            relationships with social.
          </p>
        </section>
        <section className="lg:col-span-2">
          <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
            {jobs.map((job) => (
              <li key={job.department}>
                <section className="space-y-4">
                  <img
                    className="object-cover shadow-lg rounded-lg h-64 w-full"
                    src={job.imageUrl}
                    alt=""
                    aria-hidden="true"
                  />
                  <section className="text-lg leading-6 font-medium space-y-1">
                    <h3 className="text-white">{job.department}</h3>
                    <p className="text-[color:var(--primary-font-color)]">{job.role}</p>
                  </section>
                  <section className="text-lg">
                    <p className="text-gray-500">{job.desc}</p>
                  </section>
                </section>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </article>
  )
}
