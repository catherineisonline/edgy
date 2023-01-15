const jobs = [
  {
    department: 'Human Resource Management',
    role: 'HR Assistant',
    imageUrl:
      'https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1896&q=80',
    desc:
      'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
  {
    department: 'Social Media Marketing',
    role: 'Growth Specialist',
    imageUrl:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    desc:
      'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
  {
    department: 'IT',
    role: 'Senior React Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80',
    desc:
      'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
  {
    department: 'Customer Support',
    role: 'Junior Customer Support',
    imageUrl:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    desc:
      'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
]

export default function JobsOne() {
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
                  <section className="aspect-w-3 aspect-h-2">
                    <img
                      className="object-cover shadow-lg rounded-lg"
                      src={job.imageUrl}
                      alt=""
                    />
                  </section>
                  <section className="text-lg leading-6 font-medium space-y-1">
                    <h3 className="text-white">{job.department}</h3>
                    <p className="text-indigo-600">{job.role}</p>
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
