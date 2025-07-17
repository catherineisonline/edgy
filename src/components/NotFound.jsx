import { ChevronDoubleRightIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
const links = [
    {
        name: 'Pricing',
        href: '/pricing',
        description: 'Checkout the price range and benefits',
    },
    {
        name: 'Blog',
        href: '/blog',
        description: 'Read our most popular posts',
    },
    {
        name: 'Jobs',
        href: '/jobs',
        description: 'We are always hiring',
    },
    {
        name: 'FAQ',
        href: '/faq',
        description: 'In case you have any questions, head over here',
    },
]

export default function NotFound() {
    return (
        <main className="min-h-full flex items-center flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 pt-10 pb-40">
            <img
                className="mx-auto h-10 w-auto sm:h-28"
                src="https://media2.giphy.com/media/KTrm3NshQvM1M80sSO/200w.webp?cid=ecf05e4752zryvnz616xiuea6iitfabr5vfs70z4x1u0qsyy&ep=v1_stickers_search&rid=200w.webp&ct=ts"
                alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">This page does not exist</h2>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
                Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20 ">
                <h2 className="sr-only">Popular pages</h2>
                <ul className="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5">
                    {links.map((link, index) => (
                        <li key={index} className="relative flex gap-x-6 py-6">
                            <div className="flex-auto">
                                <h3 className="text-sm font-semibold leading-6 text-white">
                                    <Link to={link.href}>
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        {link.name}
                                    </Link>
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-gray-600">{link.description}</p>
                            </div>
                            <div className="flex-none self-center">
                                <ChevronDoubleRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>
                        </li>
                    ))}
                </ul>
                <Link to="/" className="mt-10 flex justify-center text-sm font-semibold leading-6 text-indigo-600">
                    <span aria-hidden="true">&larr;</span>
                    Back to home
                </Link>
            </div>
        </main>
    )
}