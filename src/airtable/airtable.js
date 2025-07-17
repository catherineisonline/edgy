import Airtable from "airtable";

const apiKey = import.meta.env.VITE_AIRTABLE_KEY;
const baseId = import.meta.env.VITE_AIRTABLE_ID;

const edgyBase = new Airtable({ apiKey: apiKey }).base(baseId);

export default edgyBase;
