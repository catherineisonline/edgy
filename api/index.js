import express, { json } from 'express';
import cors from 'cors'; // Import the cors middleware
import fetch from 'node-fetch';
const captchaSecret = process.env.REACT_APP_CAPTCHA_SECRET;



const app = express();
const port = 3000; // Choose a port for your server

app.use(json());
app.use(cors()); // Enable CORS for all routes

app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳')
})

app.get("/airtable", (req, response) => {
    fetch(`https://api.airtable.com/v0/appd8UNly6GmJ3LFX/users`, {
        headers: {
            'Authorization': `Bearer keyjBEcUEoMCwO7GA`
        }
    })
        .then((response) => response.json())
        .then((result) => {

            return response.json(result);
        })
        .catch((err) => {
            return console.log(err, 'hu');
        });
});
// export default function handler(request, response) {
//     return response.end("I'm a Serverless Function!");
// }

app.post('/verify-recaptcha', async (req, res) => {
    const { token } = req.body;
    const secret = captchaSecret; // Replace with your own reCAPTCHA secret key
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
