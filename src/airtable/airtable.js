//Airtable
import Airtable from 'airtable';

const apiKey = process.env.REACT_APP_AIRTABLE_KEY;
const baseId = process.env.REACT_APP_AIRTABLE_ID;

const edgyBase = new Airtable({ apiKey: apiKey }).base(baseId);

export default edgyBase;