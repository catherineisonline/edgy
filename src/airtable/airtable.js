import Airtable from "airtable";

const apiKey = process.env.VITE_AIRTABLE_KEY;
const baseId = process.env.VITE_AIRTABLE_ID;
console.log(apiKey, baseId);

const edgyBase = new Airtable({ apiKey: apiKey }).base(baseId);

export default edgyBase;
