import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({
  user,
  updateUser,
  deleteUser,
  setLoggedIn,
  setTriggeredLogout,
}) => {
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
    if (fieldName === "fullname") {
      setEditFullName(true);
      setEditEmail(false);
      setEditGender(false);
      setEditPassword(false);
    }
    if (fieldName === "email") {
      setEditEmail(true);
      setEditFullName(false);
      setEditGender(false);
      setEditPassword(false);
    }
    if (fieldName === "gender") {
      setEditGender(true);
      setEditFullName(false);
      setEditEmail(false);
      setEditPassword(false);
    }
    if (fieldName === "password") {
      setEditPassword(true);
      setEditFullName(false);
      setEditEmail(false);
      setEditGender(false);
    }
    if (fieldName === "plan") {
      setEditPlan(true);
      setEditPassword(false);
      setEditFullName(false);
      setEditEmail(false);
      setEditGender(false);
    }
  };
  const submitForm = async (e, validationTarget, fieldName) => {
    e.preventDefault();
    const validationErrors = validationTarget(formValue[fieldName]);
    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
    } else {
      const updated = await updateUser(user.id, {
        [fieldName]: formValue[fieldName],
      });
      if (!updated.success) {
        if (updated.reason === "email") {
          setFormErrors({ email: "Email already exists" });
        }
      } else {
        setFormValue({});
        setFormErrors({});
        handleCancel(fieldName);
        if (fieldName !== "password") {
          setEditPassword(false);
        }
      }
    }
  };

  const handleCancel = (target) => {
    if (target === "fullname") {
      setEditFullName(false);
    }
    if (target === "email") {
      setEditEmail(false);
    }
    if (target === "password") {
      setEditPassword(false);
    }
    if (target === "gender") {
      setEditGender(false);
    }
    if (target === "plan") {
      setEditPlan(false);
    }
    setFormValue({});
    setFormErrors({});
  };

  const handelChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setFormValue({ ...formValue, email: value.toLowerCase() });
    } else {
      setFormValue({ ...formValue, [name]: value });
    }
  };

  const deleteAcc = () => {
    deleteUser(user.id);
    setLoggedIn(false);
    setTriggeredLogout(true);
    navigator("/");
    window.scrollTo(0, 0);
  };

  const formValidator = (field) => (formValueObject) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const errors = {};

    if (!formValueObject && field !== "password") {
      errors[field] = `This field is required`;
    } else if (field === "fullname" && formValueObject.length < 3) {
      errors[field] = `Full name is too short`;
    } else if (field === "fullname" && formValueObject === user.fullname) {
      errors[field] = `Full name is the same`;
    } else if (field === "email" && !emailRegex.test(formValueObject)) {
      errors[field] = `Email is not valid`;
    } else if (field === "email" && formValueObject === user.email) {
      errors[field] = `Email is the same`;
    }
    if (field === "password") {
      if (Object.keys(formValue).length === 0) {
        errors.password = `Password fields are empty`;
      } else if (
        formValue["password"] === undefined ||
        formValue["password"].length === 0
      ) {
        errors.password = `Password field is empty`;
      } else if (
        formValue["repeatedPassword"] === undefined ||
        formValue["repeatedPassword"].length === 0
      ) {
        errors.repeatedPassword = `Please repeat the password`;
      } else if (formValue["password"] !== formValue["repeatedPassword"]) {
        errors.password = `Passwords should match`;
      } else if (formValue["password"] && formValue["password"].length < 8) {
        errors.password = `Password should be min. 8 characters`;
      } else if (
        formValue["repeatedPassword"] &&
        formValue["repeatedPassword"].length < 8
      ) {
        errors.repeatedPassword = `Password should be min. 8 characters`;
      } else if (formValue["password"] === user.password) {
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
        <h3 className="text-base font-semibold leading-7 text-white">
          Profile Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-400">
          Personal details and application
        </p>
      </div>
      <div className="mt-6 border-t border-white/10">
        <dl className="divide-y divide-white/10">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white">
              Full name
            </dt>
            {editFullName ? (
              <section className="flex flex-col gap-2">
                <form
                  onSubmit={(e) => submitForm(e, validateFullName, "fullname")}
                  className="flex flex-row gap-2">
                  <label htmlFor="fullname" className="sr-only">
                    Full name
                  </label>
                  <input
                    onChange={handelChange}
                    defaultValue={formValue["fullname"]}
                    className="appearance-none relative block w-50 px-3 py-1 border border-gray-300 placeholder-gray-500 text-white rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    id="fullname"
                    name="fullname"
                    type="text"
                    placeholder={user.fullname}
                  />
                  <button
                    type="submit"
                    className="cursor-pointer group relative w-full flex justify-center items-center py-1 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCancel("fullname")}
                    className="cursor-pointer group relative w-full flex justify-center items-center py-1 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Cancel
                  </button>
                </form>
                <span className="text-red-400">{formErrors["fullname"]}</span>
              </section>
            ) : (
              <dd className="flex flex-row gap-2 mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                {user.fullname}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  onClick={() => activateEditField("fullname")}
                  className="w-4 h-auto text-white cursor-pointer">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </dd>
            )}
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white">
              Email address
            </dt>
            {editEmail ? (
              <section className="flex flex-col gap-2">
                <form
                  onSubmit={(e) => submitForm(e, validateEmail, "email")}
                  className="flex flex-row gap-2">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    onChange={handelChange}
                    defaultValue={formValue["email"]}
                    className="appearance-none relative block w-50 px-3 py-1 border border-gray-300 placeholder-gray-500 text-white rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    id="email"
                    name="email"
                    type="text"
                    placeholder={user.email}
                  />
                  <button
                    type="submit"
                    className="cursor-pointer group relative w-full flex justify-center items-center py-1 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCancel("email")}
                    className="cursor-pointer group relative w-full flex justify-center items-center py-1 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Cancel
                  </button>
                </form>
                <span className="text-red-400">{formErrors["email"]}</span>
              </section>
            ) : (
              <dd className="flex flex-row gap-2 mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                {user.email}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  onClick={() => activateEditField("email")}
                  className="w-4 h-auto text-white cursor-pointer">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </dd>
            )}
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white">Gender</dt>
            {editGender ? (
              <section className="flex flex-col gap-2">
                <form
                  onSubmit={(e) => submitForm(e, validateGender, "gender")}
                  className="flex flex-row gap-2">
                  <label htmlFor="gender" className="sr-only">
                    Gender
                  </label>
                  <select
                    onChange={handelChange}
                    id="gender"
                    name="gender"
                    className=" w-max cursor-pointer relative block px-1 py-1 border border-gray-300 placeholder-gray-500 text-white rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    defaultValue={user.gender}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="N/A">N/A</option>
                  </select>
                  <button
                    type="submit"
                    className="cursor-pointer group relative w-full flex justify-center items-center py-1 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCancel("gender")}
                    className="cursor-pointer group relative w-full flex justify-center items-center py-1 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Cancel
                  </button>
                </form>
                <span className="text-red-400">{formErrors["email"]}</span>
              </section>
            ) : (
              <dd className="flex flex-row gap-2 mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                {user.gender?.length > 0 ? user.gender : "Not selected"}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  onClick={() => activateEditField("gender")}
                  className="w-4 h-auto text-white cursor-pointer">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </dd>
            )}
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white">Plan</dt>
            {editPlan ? (
              <section className="flex flex-col gap-2">
                <form
                  onSubmit={(e) => submitForm(e, validatePlan, "plan")}
                  className="flex flex-row gap-2">
                  <label htmlFor="plan" className="sr-only">
                    Plan
                  </label>
                  <select
                    onChange={handelChange}
                    id="plan"
                    name="plan"
                    className=" w-max cursor-pointer relative block px-1 py-1 border border-gray-300 placeholder-gray-500 text-white rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    defaultValue={user.gender}>
                    <option value="Standard">Standard</option>
                    <option value="Premium">Premium</option>
                    <option value="Business">Business</option>
                    <option value="N/A">N/A</option>
                  </select>
                  <button
                    type="submit"
                    className="cursor-pointer group relative w-full flex justify-center items-center py-1 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCancel("plan")}
                    className="cursor-pointer group relative w-full flex justify-center items-center py-1 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Cancel
                  </button>
                </form>
                <span className="text-red-400">{formErrors["plan"]}</span>
              </section>
            ) : (
              <dd className="flex flex-row gap-2 mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                {user.plan?.length > 0 ? user.plan : "Not selected"}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  onClick={() => activateEditField("plan")}
                  className="w-4 h-auto text-white cursor-pointer">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </dd>
            )}
          </div>
        </dl>
      </div>
      <section className="mt-10 space-x-4 flex flex-row gap-2">
        <button
          onClick={() => {
            setDeleteRequest(true);
          }}
          className="cursor-pointer inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">
          Delete account
        </button>
        <button
          onClick={() => activateEditField("password")}
          className="cursor-pointer inline-block bg-white  py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50">
          Change password
        </button>
      </section>
      {deleteRequest && (
        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto bg-gray-900/80 p-4">
          <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-xl transition-all">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-red-600"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                  />
                </svg>
              </div>

              <div className="text-left">
                <h3 className="text-base font-semibold text-gray-900">
                  Delete account
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Are you sure you want to delete your account? Deleting it will
                  result in the permanent removal of all your data and the
                  complete closure of the account. Please note that this action
                  is irreversible.
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={deleteAcc}
                type="button"
                className="cursor-pointer rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500">
                Delete
              </button>
              <button
                onClick={() => setDeleteRequest(false)}
                className="cursor-pointer rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {editPassword && (
        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto bg-gray-900/80 p-4">
          <form
            onSubmit={(e) => submitForm(e, validatePassword, "password")}
            className="flex flex-col gap-6 w-full max-w-xl rounded-lg bg-white p-8 shadow-xl">
            <div className="flex items-center gap-4 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                <svg
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Edit password
              </h3>
            </div>

            <input
              id="username"
              name="username"
              type="text"
              className="sr-only"
              autoComplete="username"
              aria-hidden="true"
            />

            <label className="relative w-full">
              <span className="block text-sm font-medium text-gray-700">
                New password
              </span>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                defaultValue={formValue["password"]}
                onChange={handelChange}
                className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              <span className="absolute mt-1 text-sm text-red-400">
                {formErrors["password"]}
              </span>
            </label>

            <label className="relative w-full">
              <span className="block text-sm font-medium text-gray-700">
                Repeat password
              </span>
              <input
                id="repeatedPassword"
                name="repeatedPassword"
                type="password"
                autoComplete="new-password"
                defaultValue={formValue["repeatedPassword"]}
                onChange={handelChange}
                className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              <span className="absolute mt-1 text-sm text-red-400">
                {formErrors["repeatedPassword"]}
              </span>
            </label>

            <div className="flex gap-4 justify-end">
              <button
                type="button"
                onClick={() => handleCancel("password")}
                className="cursor-pointer rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50">
                Cancel
              </button>
              <button
                type="submit"
                className="cursor-pointer rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500">
                Change password
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;
