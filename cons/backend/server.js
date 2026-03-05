import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Transporter configuration for Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    try {
        const mailOptions = {
            from: process.env.EMAIL_USER, // The authenticated Gmail account
            to: process.env.EMAIL_USER, // Send it to the same account (skjnconstructionltd@gmail.com)
            replyTo: email, // Allow replying directly to the customer
            subject: `Website Inquiry: ${subject || 'No Subject'}`,
            text: `You have received a new inquiry from the SKJN Construction Website.\n\nCustomer Details:\n------------------\nName: ${name}\nEmail: ${email}\nSubject: ${subject || 'No Subject'}\n\nMessage:\n------------------\n${message}`
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send the message. Please try again later.' });
    }
});

app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});
