import React, { useState } from "react";

export default function JobsForm() {
    const [formValue, setFormValue] = useState({ email: '' });
    const [formError, setFormError] = useState({});
    const [submit, setSubmit] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setFormError(validateForm(formValue))
        if (Object.keys(validateForm(formValue)).length > 0) {
            setLoading(false);
            return null;
        }
        else {
            setSubmit(true);
            setFormValue({ email: '' });
            setLoading(false);
        }


    }
    const handleValidation = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    }

    const validateForm = (value) => {
        const errors = {};
        const emailValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        if (!value.email) {
            errors.email = "Empty email field"
        }
        else if (!emailValidation.test(value.email)) {
            errors.email = "Invalid email format"
        }
        return errors;
    }
    return (
        <article className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <h2 className=" text-3xl font-extrabold tracking-tight text-white sm:block sm:text-4xl">
                Ready to advance your career?
            </h2>
            <p className=" text-3xl font-extrabold tracking-tight text-[color:var(--primary-font-color)] sm:block sm:text-4xl">
                Send us your email and we will contact you.
            </p>
            {loading ?
                <React.Fragment>
                    <div role="status">
                        <svg aria-hidden="true" className="w-10 h-10 mt-6 text-gray-200 animate-spin dark:text-gray-600 fill-indigo-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </React.Fragment>
                : submit && Object.keys(formError).length === 0 ? <p className='font-medium text-green-600 sm:text-xl lg:text-lg xl:text-xl mt-6'>We received your request! Please check you email.</p> :
                    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-8 w-full sm:max-w-xs">
                        <label htmlFor="email" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            onChange={handleValidation}
                            type="text"
                            className="w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            placeholder="Enter your email"
                        />
                        <span className="text-red-400 absolute mt-12">{formError.email}</span>
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Let's do this
                        </button>
                    </form>}

        </article>
    )
}