import { PencilAltIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { ExclamationIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";


const Profile = ({ retrieveDatabase, user, updateUser, deleteUser, setLoggedIn, setTriggeredLogout }) => {
    const navigator = useNavigate();
    const [formValue, setFormValue] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [deleteRequest, setDeleteRequest] = useState(false);
    const [editFullName, setEditFullName] = useState(false);
    const [editEmail, setEditEmail] = useState(false);
    const [editGender, setEditGender] = useState(false);
    const [editPassword, setEditPassword] = useState(false);
    const [editPlan, setEditPlan] = useState(false);

    const activateEditField = (fieldName) => {
        if (fieldName === 'fullname') {
            setEditFullName(true);
            setEditEmail(false);
            setEditGender(false);
            setEditPassword(false);
        }
        if (fieldName === 'email') {
            setEditEmail(true);
            setEditFullName(false);
            setEditGender(false);
            setEditPassword(false);
        }
        if (fieldName === 'gender') {
            setEditGender(true);
            setEditFullName(false);
            setEditEmail(false);
            setEditPassword(false);
        }
        if (fieldName === 'password') {
            setEditPassword(true);
            setEditFullName(false);
            setEditEmail(false);
            setEditGender(false);
        }
        if (fieldName === 'plan') {
            setEditPlan(true);
            setEditPassword(false);
            setEditFullName(false);
            setEditEmail(false);
            setEditGender(false);
        }
    }
    const submitForm = (e, validationTarget, fieldName) => {
        e.preventDefault();
        if (fieldName !== 'password') {
            const validationErrors = validationTarget(formValue[fieldName]);
            if (Object.keys(validationErrors).length > 0) {
                setFormErrors(validationErrors);
            } else {
                updateUser(user.id, { [fieldName]: formValue[fieldName] });
                setFormValue({});
                setFormErrors({});
                handleCancel(fieldName);

            }
        } else {
            const validationErrors = validationTarget(formValue);
            if (Object.keys(validationErrors).length > 0) {
                setFormErrors(validationErrors);
            } else {
                updateUser(user.id, { [fieldName]: formValue[fieldName] });
                setFormValue({});
                setFormErrors({});
                setEditPassword(false);
            }
        }
    };


    const handleCancel = (target) => {
        if (target === 'fullname') {
            setEditFullName(false);
        }
        if (target === 'email') {
            setEditEmail(false);
        }
        if (target === 'password') {
            setEditPassword(false);
        }
        if (target === 'gender') {
            setEditGender(false);
        }
        if (target === 'plan') {
            setEditPlan(false);
        }
        setFormValue({});
        setFormErrors({});
    }


    const handelChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    }

    const deleteAcc = () => {
        deleteUser(user.id);
        setLoggedIn(false);
        setTriggeredLogout(true);
        navigator('/');
        window.scrollTo(0, 0);
    }


    const formValidator = (field) => (formValue) => {
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        const errors = {};
        retrieveDatabase(user.email);
        if (!formValue) {
            errors[field] = `${field} field is required`;
        }
        else if (field === 'fullname' && formValue.length < 3) {
            errors[field] = `Full name is too short`;
        }
        else if (field === 'fullname' && formValue === user.fullname) {
            errors[field] = `Full name is the same`;
        }
        else if (field === 'email' && !emailRegex.test(formValue)) {
            errors[field] = `Email is not valid`;
        }
        else if (field === 'email' && formValue === user.email) {
            errors[field] = `Email is the same`;
        }
        if (field === 'password') {
            if (!formValue.password && !formValue.repeatedPassword) {
                errors.password = `Password fields are empty`;
            }
            else if (!formValue.password) {
                errors.password = `Password field is empty`;
            }
            else if (!formValue.repeatedPassword) {
                errors.repeatedPassword = `Password field is empty`;
            }
            else if (formValue.password.length < 8) {
                errors.password = `Password should be min. 8 characters`;
            }
            else if (formValue.repeatedPassword.length < 8) {
                errors.repeatedPassword = `Password should be min. 8 characters`;
            }
            else if (formValue.password !== formValue.repeatedPassword) {
                errors.password = `Passwords should match`;
            }
            else if (formValue.password === user.password) {
                errors.password = `New password can't be the same as old`;
            }
        }
        return errors;
    };

    const validateFullName = formValidator("fullname");
    const validateEmail = formValidator("email");
    const validatePassword = formValidator("password");
    const validateGender = formValidator("gender");
    const validatePlan = formValidator("plan");

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
                        {editFullName ?
                            <section className="flex flex-col gap-2">
                                <form onSubmit={(e) => submitForm(e, validateFullName, "fullname")} className="flex flex-row gap-2">
                                    <label htmlFor="fullname" className="sr-only">
                                        Full name
                                    </label>
                                    <input onChange={handelChange}
                                        defaultValue={formValue['fullname']}
                                        className="appearance-none relative block w-full px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" id="fullname" name="fullname" type="text" placeholder={user.fullname} />
                                    <button
                                        type="submit"
                                        className="group relative w-full flex justify-center py-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                                    <button
                                        type="button"
                                        onClick={() => handleCancel("fullname")} className="group relative w-full flex justify-center py-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button>

                                </form>
                                <span className="text-red-400">{formErrors['fullname']}</span>
                            </section>
                            :
                            <dd className="flex flex-row gap-2 mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{user.fullname}  <PencilAltIcon onClick={() => activateEditField('fullname')} className="w-4 h-auto text-white" /></dd>
                        }
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-white">Email address</dt>
                        {editEmail ?
                            <section className="flex flex-col gap-2">
                                <form onSubmit={(e) => submitForm(e, validateEmail, "email")} className="flex flex-row gap-2">
                                    <label htmlFor="email" className="sr-only">
                                        Email
                                    </label>
                                    <input onChange={handelChange}
                                        defaultValue={formValue['email']}
                                        className="appearance-none relative block w-full px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" id="email" name="email" type="text" placeholder={user.email} />
                                    <button
                                        type="submit"
                                        className="group relative w-full flex justify-center py-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                                    <button
                                        type="button"
                                        onClick={() => handleCancel("email")} className="group relative w-full flex justify-center py-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button>

                                </form>
                                <span className="text-red-400">{formErrors['email']}</span>
                            </section> :
                            <dd className="flex flex-row gap-2 mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{user.email}  <PencilAltIcon onClick={() => activateEditField('email')} className="w-4 h-auto text-white" /></dd>
                        }

                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-white">Gender</dt>
                        {editGender ? <section className="flex flex-col gap-2">
                            <form onSubmit={(e) => submitForm(e, validateGender, "gender")} className="flex flex-row gap-2">
                                <label htmlFor="gender" className="sr-only">
                                    Gender
                                </label>
                                <select
                                    onChange={handelChange}
                                    id="gender"
                                    name="gender"
                                    className=" w-max cursor-pointer relative block px-1 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    defaultValue={user.gender}>
                                    <option value='Male'>Male</option>
                                    <option value='Female'>Female</option>
                                    <option value='N/A'>N/A</option>
                                </select>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                                <button
                                    type="button"
                                    onClick={() => handleCancel("gender")} className="group relative w-full flex justify-center py-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button>
                            </form>
                            <span className="text-red-400">{formErrors['email']}</span>
                        </section> :
                            <dd className="flex flex-row gap-2 mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{user.gender?.length > 0 ? user.gender : "Not selected"} <PencilAltIcon onClick={() => activateEditField('gender')} className="w-4 h-auto text-white" /></dd>}
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-white">Plan</dt>
                        {editPlan ? <section className="flex flex-col gap-2">
                            <form onSubmit={(e) => submitForm(e, validatePlan, "plan")} className="flex flex-row gap-2">
                                <label htmlFor="plan" className="sr-only">
                                    Plan
                                </label>
                                <select
                                    onChange={handelChange}
                                    id="plan"
                                    name="plan"
                                    className=" w-max cursor-pointer relative block px-1 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    defaultValue={user.gender}>
                                    <option value='Standard'>Standard</option>
                                    <option value='Premium'>Premium</option>
                                    <option value='Business'>Business</option>
                                    <option value='N/A'>N/A</option>
                                </select>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                                <button
                                    type="button"
                                    onClick={() => handleCancel("plan")} className="group relative w-full flex justify-center py-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button>
                            </form>
                            <span className="text-red-400">{formErrors['plan']}</span>
                        </section> :
                            <dd className="flex flex-row gap-2 mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">{user.plan?.length > 0 ? user.plan : "Not selected"} <PencilAltIcon onClick={() => activateEditField('plan')} className="w-4 h-auto text-white" /></dd>}

                    </div>

                </dl>
            </div>
            <section className="mt-10 space-x-4 flex flex-row gap-2">
                <button onClick={() => { setDeleteRequest(true); }} className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">
                    Delete account
                </button>
                <button
                    onClick={() => activateEditField("password")}
                    className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50">
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

            {editPassword ?
                <div className="relative z-10 bg-gray-900 shadow">
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex  min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className="relative flex flex-col gap-4 transform overflow-hidden rounded-lg bg-white  p-12 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl ">
                                <div className="sm:flex sm:flex-row  gap-4 items-center	 text-center md:flex-row flex-col">
                                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                    </div>
                                    <h3 className="text-base font-semibold leading-6 text-gray-900">
                                        Edit password
                                    </h3>
                                </div>
                                <form onSubmit={(e) => submitForm(e, validatePassword, "password")} className="flex flex-row gap-2">
                                    <div className="w-full relative flex flex-col">
                                        <label htmlFor="password" className="sr-only">
                                            Password
                                        </label>
                                        <input onChange={handelChange}
                                            defaultValue={formValue['password']}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" id="password" name="password" type="password" placeholder="" />
                                        <span className="text-red-400 block w-max absolute z-10 mt-8 pt-4">{formErrors['password']}</span>
                                    </div>
                                    <div className="w-full relative flex flex-col">
                                        <label htmlFor="repeatedPassword" className="sr-only">
                                            Repeat password
                                        </label>
                                        <input onChange={handelChange}
                                            defaultValue={formValue['repeatedPassword']}
                                            className="appearance-none  block w-full px-3  py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" id="repeatedPassword" name="repeatedPassword" type="password" placeholder="" />
                                        <span className="text-red-400 block w-max absolute z-10 mt-8 pt-4 mr-0">{formErrors['repeatedPassword']}</span>
                                    </div>
                                    <button
                                        type="submit"
                                        className="inline-flex w-full h-max justify-center rounded-md bg-red-600 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3	"

                                    >
                                        Change password
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleCancel("password")}
                                        className="mt-3 inline-flex w-full  h-max justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                    >
                                        Cancel
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                :
                null}

        </div>
    )
}

export default Profile;