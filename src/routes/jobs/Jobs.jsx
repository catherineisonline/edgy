import JobsForm from "../../components/JobsForm";
import JobsListing from "./JobsListing";

export default function Jobs() {
  return (
    <main className="bg-gray-900">
      <JobsListing />
      <JobsForm />
    </main>
  );
}
