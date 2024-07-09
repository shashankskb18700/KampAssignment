import express from "express";
import path from "path";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import { initializeApp } from "firebase/app";
import * as db from "firebase/firestore";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.APP_API_KEY,
  authDomain: process.env.APP_AUTH_DOMAIN,
  projectId: process.env.APP_PROJECT_ID,
  storageBucket: process.env.APP_STORAGE_BUCKET,
  messagingSenderId: process.env.APP_MESSAGING_SENDER_ID,
  appId: process.env.APP_APP_ID,
  measurementID: process.env.APP_MEASUREMENT_ID,
};

initializeApp(firebaseConfig);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./from.html"));
});

app.post("/data", async (req, res) => {
  const { name, email, message } = req.body;
  const { setDoc, doc, collection, addDoc } = db;
  await setDoc(doc(db.getFirestore(), "kampCoderFormData", name), {
    name: name,
    email: email,
    message: message,
  });

  console.log(req.body);
  res.sendFile(path.join(__dirname, "./success.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
