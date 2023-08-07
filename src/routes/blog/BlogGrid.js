import { Link } from 'react-router-dom'
import blogPostsData from '../../data/blogPostsData'

export default function BlogGrid() {
  const ResetLocation = () => window.scrollTo(0, 0)
  return (
    <article className="relative max-w-7xl mx-auto">
      <section className="text-center">
        <h2 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl">
          Edgy Blog
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Expand your brand's reach and get more followers with these tried and
          tested Instagram growth strategies.
        </p>
      </section>
      <section className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none ">
        {blogPostsData.map((post, index) => (
          <section
            key={index}
            className="flex flex-col rounded-lg shadow-lg overflow-hidden "
          >
            <section className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src={post.imageUrl}
                alt=""
                aria-hidden="true"
              />
            </section>
            <section className="flex-1 bg-gray-900 p-6 flex flex-col justify-between">
              <section className="flex-1">
                <Link
                  onClick={ResetLocation}
                  to={post.href}
                  className="block mt-2 "
                >
                  <p className="text-xl font-semibold hover:text-violet-600 text-white duration-500	">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    {post.description}
                  </p>
                </Link>
              </section>
              <section className="mt-6 flex items-center">
                <section className="flex-shrink-0">
                  <span className="sr-only">{post.author.name}</span>
                  <img
                    className="h-10 w-10 rounded-full"
                    src={post.author.imageUrl}
                    alt=""
                  />
                </section>
                <section className="ml-3">
                  <p className="text-sm font-medium text-white">
                    {post.author.name}
                  </p>
                  <section className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.datetime}>{post.date}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readingTime} read</span>
                  </section>
                </section>
              </section>
            </section>
          </section>
        ))}
      </section>
    </article>
  )
}
