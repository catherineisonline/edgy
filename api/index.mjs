import express, { json } from 'express';
import cors from 'cors'; // Import the cors middleware
import fetch from 'node-fetch';
const captchaSecret = process.env.REACT_APP_CAPTCHA_SECRET;
const app = express();
const port = 3000; // Choose a port for your server

app.use(json());
app.use(cors()); // Enable CORS for all routes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    // next()
})
// app.options('*', cors())

app.get('/', (req, res) => {
    res.send('Server Deployed 🥳')
})

app.get("/airtable", (req, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // next();
    fetch(`https://api.airtable.com/v0/appd8UNly6GmJ3LFX/users`, {
    })
        .then((response) => response.json())
        .then((result) => {

            return response.json(result);
        })
        .catch((err) => {
            return console.log(err, 'hu');
        });
});


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



const allowCors = fn => async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    if (req.method === 'OPTIONS') {
        res.status(200).end()
        return
    }
    return await fn(req, res)
}

const handler = (req, res) => {
    const d = new Date()
    res.end(d.toString())
}

module.exports = allowCors(handler)