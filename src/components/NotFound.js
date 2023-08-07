
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="min-h-full flex flex-col gap-2 items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 pt-40 pb-40 text-white">
            <h2 className="text-3xl tracking-tight font-extrabold text-white sm:text-2xl">Oops! You seem to be lost.</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Here are some helpful links</p>
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/contact'>Contact</Link>
        </div >
    )
}