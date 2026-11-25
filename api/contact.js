
  import nodemailer from 'nodemailer';
  import { MongoClient } from 'mongodb';

  let cachedClientPromise;

  async function getMongoClient() {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not configured.');
    }

    if (!cachedClientPromise) {
      const client = new MongoClient(process.env.MONGODB_URI);

      cachedClientPromise = client.connect().catch((error) => {
        cachedClientPromise = null;
        throw error;
      });
    }

    return cachedClientPromise;
  }

  export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return res.status(405).json({
        message: 'Method not allowed.',
      });
    }

    const { name, email, subject, message } = req.body || {};

    // Clean input values
    const cleanName = typeof name === 'string' ? name.trim() : '';
    const cleanEmail = typeof email === 'string' ? email.trim() : '';
    const cleanSubject = typeof subject === 'string' ? subject.trim() : '';
    const cleanMessage = typeof message === 'string' ? message.trim() : '';

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate fields
    if (!cleanName || !cleanEmail || !cleanSubject || !cleanMessage) {
      return res.status(400).json({
        message: 'Please fill in all fields.',
      });
    }

    if (
      cleanName.length > 80 ||
      cleanEmail.length > 254 ||
      cleanSubject.length > 120 ||
      cleanMessage.length > 5000 ||
      !emailPattern.test(cleanEmail) ||
      /[\r\n]/.test(cleanSubject)
    ) {
      return res.status(400).json({
        message: 'Please provide valid form details.',
      });
    }

    // Check environment variables
    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.MONGODB_URI
    ) {
      console.error('Contact API environment variables are missing.');

      return res.status(500).json({
        message: 'The contact service is not configured yet.',
      });
    }

    try {
      // Configure Gmail SMTP
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Connect to MongoDB
      const client = await getMongoClient();
      const db = client.db();
      const contactCollection = db.collection('contacts');

      // Save message first
      const savedMessage = await contactCollection.insertOne({
        name: cleanName,
        email: cleanEmail,
        subject: cleanSubject,
        message: cleanMessage,
        date: new Date(),
        emailStatus: 'pending',
      });

      // Send email
      try {
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: 'deepanshudhakad381@gmail.com',
          replyTo: cleanEmail,
          subject: `Portfolio contact: ${cleanSubject}`,
          text: [
            `Name: ${cleanName}`,
            `Email: ${cleanEmail}`,
            `Subject: ${cleanSubject}`,
            '',
            'Message:',
            cleanMessage,
          ].join('\n'),
        });

        // Update email status
        await contactCollection.updateOne(
          { _id: savedMessage.insertedId },
          { $set: { emailStatus: 'sent' } }
        );

        return res.status(200).json({
          message: 'Message sent successfully! Thank you for reaching out.',
        });

      } catch (emailError) {
        console.error('Contact email delivery failed:', emailError);

        await contactCollection.updateOne(
          { _id: savedMessage.insertedId },
          { $set: { emailStatus: 'failed' } }
        );

        return res.status(502).json({
          message: 'Your message was saved, but email delivery failed. Please try again later.',
        });
      }

    } catch (error) {
      console.error('Contact API error:', error);

      return res.status(500).json({
        message: 'Unable to process your message right now. Please try again later.',
      });
    }
  }
