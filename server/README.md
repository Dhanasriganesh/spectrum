# Contact Form Server

Backend server for handling contact form submissions with email notifications.

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Environment Variables

Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

Then edit `.env` and fill in your values (see below for details).

### 3. Gmail App Password Setup

To use Gmail for sending emails, you need to create an App Password:

1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification (if not already enabled)
4. Go to App Passwords
5. Select "Mail" and your device
6. Copy the generated 16-character password
7. Paste it in your `.env` file as `EMAIL_APP_PASSWORD`

### 4. Run the Server

**Development mode:**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run on `http://localhost:3001` (or the PORT specified in `.env`).

### 5. Update Frontend Environment Variable

In your frontend project, create or update `.env`:

```env
VITE_API_URL=http://localhost:3001/api
```

## API Endpoints

### POST /api/contact

Submit contact form with optional file attachment.

**Request:**
- Method: POST
- Content-Type: multipart/form-data
- Body:
  - `name` (required): Full name
  - `company` (optional): Company name
  - `email` (required): Email address
  - `mobile` (required): Mobile number
  - `message` (required): Message content
  - `file` (optional): File attachment (PDF, DOCX, ZIP, PPTX, images up to 10MB)

**Response:**
```json
{
  "success": true,
  "message": "Thank you! Your message has been sent successfully.",
  "emailSent": {
    "admin": true,
    "customer": true
  }
}
```

### GET /health

Health check endpoint.

## Email Templates

The server sends two emails:
1. **Admin Notification**: Sent to `ADMIN_EMAIL` with all form details
2. **Customer Confirmation**: Sent to the customer's email with a thank you message

## File Uploads

Uploaded files are stored in the `server/uploads/` directory. Make sure this directory has write permissions.

## Notes

- Maximum file size: 10MB
- Allowed file types: PDF, DOCX, ZIP, PPTX, JPEG, JPG, PNG, GIF
- Emails are sent using Gmail SMTP


