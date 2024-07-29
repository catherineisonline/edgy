import express, { json } from 'express';
import cors from 'cors'; // Import the cors middleware
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();
const REACT_APP_CAPTCHA_SECRET = process.env.REACT_APP_CAPTCHA_SECRET;
const REACT_APP_AIRTABLE_ID = process.env.REACT_APP_AIRTABLE_ID;
const REACT_APP_AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(json());




app.get('/', (req, res) => {
    res.send('Server Deployed 🥳')
})


app.get('/airtable', async (req, res) => {
    const airtableUrl = `https://api.airtable.com/v0/${REACT_APP_AIRTABLE_ID}/users`;

    try {
        const response = await fetch(airtableUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${REACT_APP_AIRTABLE_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(`HTTP error! Status: ${response.status}. Response: ${errorData}`);
        }

        const data = await response.json();
        return res.json(data);
    } catch (error) {
        console.error('Error:', error.message);
        return res.status(500).json({ error: 'An error occurred while fetching data from Airtable.' });
    }
});


app.post('/verify-recaptcha', async (req, res) => {
    const { token } = req.body;
    const secret = REACT_APP_CAPTCHA_SECRET; // Replace with your own reCAPTCHA secret key
    const uri = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;

    fetch(uri, {
        method: "post",
    })
        .then((response) => response.json())
        .then((google_response) => {
            // google as a response
            if (google_response.success === true) {
                //   if captcha is verified
                return res.send({ response: "Successful" });
            } else {
                // if captcha is not verified
                return res.send({ response: "Failed" });
            }
        })
        .catch((error) => {
            // Some error while verify captcha
            return res.json({ error });
        });
});

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
