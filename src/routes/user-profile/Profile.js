import { PencilAltIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { ExclamationIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";


const Profile = ({ user, updateUser, deleteUser }) => {
    const navigator = useNavigate();
    const [editField, setEditField] = useState(false);
    const [formValue, setFormValue] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [deleteRequest, setDeleteRequest] = useState(false);

    const activeEdit = () => {
        setEditField(!editField);
    }
    const submitForm = (e) => {
        e.preventDefault();
        setFormErrors(handleValidation(formValue));
        updateUser(user.id, formValue);
        setEditField(false);
        setFormValue({});
    }

    const handleCancel = (e) => {
        e.preventDefault();
        setFormValue({});
        setFormErrors({});
        setEditField(false)
    }


    const handelChange = (e) => {
        setFormValue({})
        const { name, value } = e.target;
        setFormValue({ [name]: value });
    }
    const handleValidation = (value) => {
        const errors = {};
        // const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (Object.keys(value).length === 0) {
            errors.value = "You can't submit an empty value"
        }
        if (Object.keys(value) === 'email') {
            console.log('its mail')
        }
        return errors;
    }

    const deleteAcc = () => {
        deleteUser(user.id);
        navigator('/');
    }

    return (
        <div className="overflow-hidden bg-gray-900 shadow p-10">
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-white">Profile Information</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-400">Personal details and application</p>
            </div>
            <div className="mt-6 border-t border-white/10">
                <dl className="divide-y divide-white/10">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-white">Full name</dt>
                        {editField ?
                            <section className="flex flex-col gap-2">
                                <form onSubmit={submitForm} className="flex flex-row gap-2">
                                    <label htmlFor="fullname" className="sr-only">
                                        Full name
                                    </label>
                                    <input onChange={handelChange}
                                        defaultValue={formValue.fullname}
                                        className="appearance-none relative block w-full px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" id="fullname" name="fullname" type="text" placeholder={user.fullname} />
                                    <button onClick={submitForm}
                                        type="submit"
                                        className="group relative w-full flex justify-center py-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                                    <button
                                        type="submit"
                                        onClick={handleCancel} className="group relative w-full flex justify-center py-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button>

                                </form>
                                <span className="text-red-400">{formErrors.value}</span>
                            </section>
                            :
                            <dd className="flex flex-row gap-2 mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{user.fullname}  <PencilAltIcon onClick={activeEdit} className="w-4 h-auto text-white" /></dd>
                        }
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-white">Email address</dt>
                        {editField ?
                            <section className="flex flex-col gap-2">
                                <form onSubmit={submitForm} className="flex flex-row gap-2">
                                    <label htmlFor="email" className="sr-only">
                                        Email
                                    </label>
                                    <input onChange={handelChange}
                                        defaultValue={formValue.email}
                                        className="appearance-none relative block w-full px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" id="fullname" name="fullname" type="text" placeholder={user.email} />
                                    <button onClick={submitForm}
                                        type="submit"
                                        className="group relative w-full flex justify-center py-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                                    <button
                                        type="submit"
                                        onClick={handleCancel} className="group relative w-full flex justify-center py-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button>

                                </form>
                                <span className="text-red-400">{formErrors.value}</span>
                            </section> :
                            <dd className="flex flex-row gap-2 mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{user.email}  <PencilAltIcon onClick={activeEdit} className="w-4 h-auto text-white" /></dd>
                        }

                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-white">Gender</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{user.gender?.length > 0 ? user.gender : "Not selected"}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-white">Current plan</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{user.plan?.length > 0 ? user.plan : "No plan selected"}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-white">Account created on</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                            {user.createdTime}
                        </dd>
                    </div>

                </dl>
            </div>
            <section className="mt-10 space-x-4">
                <button onClick={() => { setDeleteRequest(true); }} className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">
                    Delete account
                </button>
                <button className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50">
                    Change password
                </button>
            </section>
            {deleteRequest ?
                <div className="relative z-10 bg-gray-900 shadow">
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                    </div>
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <h3 className="text-base font-semibold leading-6 text-gray-900">
                                            Delete account
                                        </h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Are you sure you want to delete your account? Deleting it will result in the permanent removal of all your data and the complete closure of the account. Please note that this action is irreversible.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                    <button
                                        onClick={() => deleteAcc()}
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"

                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => setDeleteRequest(false)}
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                null}

        </div >
    )
}

export default Profile;