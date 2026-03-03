# Environment Variables Setup

Create a `.env` file in the `server` folder with the following variables:

## Required Environment Variables

```env
# Server Configuration
PORT=3001
FRONTEND_URL=http://localhost:5173

# Email Configuration (Gmail)
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-app-password-here

# Admin Email (where contact form submissions will be sent)
ADMIN_EMAIL=dhanasriganesh9@gmail.com
```

## How to Get Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security** section
3. Enable **2-Step Verification** (if not already enabled)
4. Scroll down to **App passwords**
5. Select **Mail** as the app and **Other** as the device
6. Enter a name like "PDSA Tech Contact Form"
7. Click **Generate**
8. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)
9. Paste it in your `.env` file as `EMAIL_APP_PASSWORD` (remove spaces)

## Example .env File

```env
PORT=3001
FRONTEND_URL=http://localhost:5173
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=abcdefghijklmnop
ADMIN_EMAIL=dhanasriganesh9@gmail.com
```

## Notes

- Never commit the `.env` file to version control
- The `.env` file is already in `.gitignore`
- `EMAIL_USER` should be your Gmail address
- `EMAIL_APP_PASSWORD` is the 16-character app password from Google
- `ADMIN_EMAIL` is where contact form submissions will be sent (can be the same as EMAIL_USER)

