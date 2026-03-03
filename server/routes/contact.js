import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { sendContactFormEmails } from '../services/emailService.js';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../uploads');
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|pdf|doc|docx|zip|ppt|pptx/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF, DOCX, ZIP, PPTX, and images are allowed.'));
    }
  }
});

// Contact form submission endpoint
router.post('/contact', upload.single('file'), async (req, res) => {
  try {
    const { name, company, email, mobile, message } = req.body;

    // Validate required fields
    if (!name || !email || !mobile || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields (name, email, mobile, message).'
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.'
      });
    }

    // Prepare contact form data
    const contactData = {
      name: name.trim(),
      company: company ? company.trim() : undefined,
      email: email.trim(),
      mobile: mobile.trim(),
      message: message.trim(),
    };

    // Get attachment path if file was uploaded
    const attachmentPath = req.file ? req.file.path : undefined;

    // Send emails
    const { adminSent, customerSent } = await sendContactFormEmails(contactData, attachmentPath);

    if (!adminSent && !customerSent) {
      return res.status(500).json({
        success: false,
        error: 'Failed to send emails. Please try again later.'
      });
    }

    // Return success response
    res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
      emailSent: {
        admin: adminSent,
        customer: customerSent
      }
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Server error. Please try again later.'
    });
  }
});

export default router;


