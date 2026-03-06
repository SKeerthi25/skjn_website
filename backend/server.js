import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    try {
        const emailjsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                service_id: 'service_kcea209',
                template_id: 'template_63wcufn',
                user_id: 'D8nFiIKX52OBvtDXI',
                template_params: {
                    from_name: name,
                    reply_to: email,
                    subject: subject || 'No Subject',
                    message: message,
                }
            })
        });

        if (emailjsResponse.ok) {
            res.status(200).json({ success: true, message: 'Message sent successfully!' });
        } else {
            const errorText = await emailjsResponse.text();
            console.error('EmailJS Error:', errorText);
            res.status(500).json({ error: 'Failed to send the message. Server responded: ' + errorText });
        }
    } catch (error) {
        console.error('Network Error connecting to EmailJS:', error);
        res.status(500).json({ error: 'Failed to connect to email provider.' });
    }
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
