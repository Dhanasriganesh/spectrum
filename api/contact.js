import nodemailer from 'nodemailer';

// Email service functions
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });
};

const createContactFormEmailTemplate = (data) => {
  const { name, company, email, mobile, message } = data;
  const currentDate = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission - PDSA Tech</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
            }
            .email-container {
                background-color: #ffffff;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .header {
                text-align: center;
                margin-bottom: 30px;
                padding-bottom: 20px;
                border-bottom: 2px solid #2563eb;
            }
            .header h1 {
                color: #2563eb;
                margin: 0;
                font-size: 24px;
            }
            .content {
                margin-bottom: 25px;
            }
            .field {
                margin-bottom: 20px;
                padding: 15px;
                background-color: #f8f9fa;
                border-radius: 8px;
                border-left: 4px solid #2563eb;
            }
            .field-label {
                font-weight: bold;
                color: #2563eb;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 5px;
            }
            .field-value {
                color: #333;
                font-size: 15px;
            }
            .message-field {
                background-color: #f0f4ff;
                padding: 20px;
                border-radius: 8px;
                border-left: 4px solid #3b82f6;
                white-space: pre-wrap;
            }
            .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #eee;
                color: #666;
                font-size: 14px;
            }
            .timestamp {
                color: #666;
                font-size: 12px;
                text-align: right;
                margin-top: 20px;
                font-style: italic;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <h1>New Contact Form Submission</h1>
                <p style="margin: 10px 0 0; color: #666;">PDSA Tech Contact Form</p>
            </div>
            
            <div class="content">
                <div class="field">
                    <div class="field-label">Full Name</div>
                    <div class="field-value">${name}</div>
                </div>

                ${company ? `
                <div class="field">
                    <div class="field-label">Company</div>
                    <div class="field-value">${company}</div>
                </div>
                ` : ''}

                <div class="field">
                    <div class="field-label">Email Address</div>
                    <div class="field-value"><a href="mailto:${email}">${email}</a></div>
                </div>

                <div class="field">
                    <div class="field-label">Mobile Number</div>
                    <div class="field-value"><a href="tel:${mobile}">${mobile}</a></div>
                </div>

                <div class="message-field">
                    <div class="field-label" style="margin-bottom: 10px;">Message</div>
                    <div class="field-value">${message}</div>
                </div>
            </div>
            
            <div class="timestamp">
                Received on: ${currentDate} (IST)
            </div>

            <div class="footer">
                <p><strong>PDSA Tech</strong></p>
                <p>📧 contact@pdsatech.com</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

const createCustomerConfirmationEmailTemplate = (data) => {
  const { name } = data;
  const currentDate = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Contacting PDSA Tech</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
            }
            .email-container {
                background-color: #ffffff;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .header {
                text-align: center;
                margin-bottom: 30px;
            }
            .header h1 {
                color: #2563eb;
                margin: 0;
                font-size: 28px;
            }
            .greeting {
                font-size: 18px;
                font-weight: bold;
                color: #2c3e50;
                margin-bottom: 20px;
            }
            .content {
                margin-bottom: 25px;
            }
            .info-box {
                background-color: #f0f4ff;
                padding: 20px;
                border-radius: 8px;
                border-left: 4px solid #2563eb;
                margin: 20px 0;
            }
            .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #eee;
                color: #666;
            }
            .contact-info {
                margin-top: 15px;
                font-size: 14px;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <h1>Thank You for Contacting Us!</h1>
            </div>
            
            <div class="greeting">
                Dear ${name},
            </div>
            
            <div class="content">
                <p>Thank you for reaching out to <strong>PDSA Tech</strong>. We have successfully received your inquiry submitted on <strong>${currentDate}</strong>.</p>
                
                <div class="info-box">
                    <p><strong>What happens next?</strong></p>
                    <ul style="margin: 10px 0; padding-left: 20px;">
                        <li>Our team will review your message and get back to you as soon as possible.</li>
                        <li>We typically respond within 24-48 hours during business days.</li>
                        <li>If your inquiry is urgent, please feel free to call us directly.</li>
                    </ul>
                </div>
                
                <p>We appreciate your interest in PDSA Tech and look forward to assisting you with your needs.</p>
                
                <p>If you have any immediate questions or concerns, please don't hesitate to contact us directly.</p>
            </div>
            
            <div class="footer">
                <p><strong>Warm regards,</strong><br>
                Team PDSA Tech</p>
                
                <div class="contact-info">
                    <p>📧 contact@pdsatech.com<br>
                    🌐 www.pdsatech.com</p>
                </div>
            </div>
        </div>
    </body>
    </html>
  `;
};

const sendContactFormEmails = async (data) => {
  const transporter = createTransporter();
  const adminEmail = process.env.ADMIN_EMAIL || 'dhanasriganesh9@gmail.com';

  // Send email to admin
  const adminMailOptions = {
    from: `"PDSA Tech Contact Form" <${process.env.EMAIL_USER}>`,
    to: adminEmail,
    subject: `New Contact Form Submission from ${data.name} - PDSA Tech`,
    html: createContactFormEmailTemplate(data),
  };

  // Send confirmation email to customer
  const customerMailOptions = {
    from: `"PDSA Tech" <${process.env.EMAIL_USER}>`,
    to: data.email,
    subject: 'Thank You for Contacting PDSA Tech',
    html: createCustomerConfirmationEmailTemplate(data),
  };

  try {
    const adminInfo = await transporter.sendMail(adminMailOptions);
    console.log('Contact form email sent to admin:', adminInfo.messageId);
    
    const customerInfo = await transporter.sendMail(customerMailOptions);
    console.log('Confirmation email sent to customer:', customerInfo.messageId);
    
    return { adminSent: true, customerSent: true };
  } catch (error) {
    console.error('Error sending emails:', error);
    return { adminSent: false, customerSent: false };
  }
};

// Vercel serverless function handler
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed'
    });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { name, company, email, mobile, message } = body;

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

    // Send emails
    const { adminSent, customerSent } = await sendContactFormEmails(contactData);

    if (!adminSent && !customerSent) {
      return res.status(500).json({
        success: false,
        error: 'Failed to send emails. Please try again later.'
      });
    }

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
      emailSent: {
        admin: adminSent,
        customer: customerSent
      }
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Server error. Please try again later.'
    });
  }
}

