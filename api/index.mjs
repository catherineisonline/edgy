import express, { json } from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";
import Airtable from "airtable";

const app = express();
const port = process.env.PORT || 3000;

dotenv.config({ path: ".env.backend" });
const AIRTABLE_KEY = process.env.AIRTABLE_KEY;
const AIRTABLE_ID = process.env.AIRTABLE_ID;
const CAPTCHA_SECRET = process.env.CAPTCHA_SECRET;

const edgyBase_backend = new Airtable({ apiKey: AIRTABLE_KEY }).base(
  AIRTABLE_ID
);

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(json());

app.get("/", (req, res) => {
  res.send("Server Deployed 🥳");
});

app.get("/airtable", async (req, res) => {
  const airtableUrl = `https://api.airtable.com/v0/${AIRTABLE_ID}/users`;

  try {
    const response = await fetch(airtableUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${AIRTABLE_KEY}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}. Response: ${errorData}`
      );
    }

    const data = await response.json();
    return res.json(data);
  } catch (error) {
    console.error("Error:", error.message);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching data from Airtable." });
  }
});
app.post("/airtable", async (req, res) => {
  const { userId, formValue } = req.body;
  const key = Object.keys(formValue)[0];
  const value = Object.values(formValue)[0];
  const form = { [key]: value };
  try {
    await edgyBase_backend("users").update([
      {
        id: userId,
        fields: form,
      },
    ]);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, reason: error.message });
  }
});

app.post("/verify-recaptcha", async (req, res) => {
  const { token } = req.body;
  const uri = `https://www.google.com/recaptcha/api/siteverify?secret=${CAPTCHA_SECRET}&response=${token}`;

  fetch(uri, {
    method: "post",
  })
    .then((response) => response.json())
    .then((google_response) => {
      if (google_response.success === true) {
        return res.send({ response: "Successful" });
      } else {
        return res.send({ response: "Failed" });
      }
    })
    .catch((error) => {
      return res.json({ error });
    });
});

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
