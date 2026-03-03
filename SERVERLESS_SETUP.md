# Serverless Contact Form Setup

This setup allows you to use the contact form without running a separate server. The email sending functionality is deployed as a serverless function.

## Option 1: Vercel (Recommended)

### Setup Steps:

1. **Install Vercel CLI (if not already installed):**
   ```bash
   npm i -g vercel
   ```

2. **Add nodemailer to your project dependencies:**
   ```bash
   npm install nodemailer
   ```

3. **Set environment variables in Vercel:**
   - Go to your Vercel project settings
   - Navigate to "Environment Variables"
   - Add these variables:
     ```
     EMAIL_USER=tejaannangi1996@gmail.com
     EMAIL_APP_PASSWORD=zmnxembklkfmwrox
     ADMIN_EMAIL=dhanasriganesh9@gmail.com
     ```

4. **Deploy to Vercel:**
   ```bash
   vercel
   ```

5. **Update frontend `.env`:**
   ```env
   VITE_API_URL=https://your-project.vercel.app/api
   ```

### File Structure:
```
api/
  contact.js    ← Serverless function
vercel.json     ← Vercel configuration
```

---

## Option 2: Netlify Functions

### Setup Steps:

1. **Install Netlify CLI (if not already installed):**
   ```bash
   npm install -g netlify-cli
   ```

2. **Add nodemailer to your project dependencies:**
   ```bash
   npm install nodemailer
   ```

3. **Set environment variables in Netlify:**
   - Go to your Netlify project settings
   - Navigate to "Environment variables"
   - Add these variables:
     ```
     EMAIL_USER=tejaannangi1996@gmail.com
     EMAIL_APP_PASSWORD=zmnxembklkfmwrox
     ADMIN_EMAIL=dhanasriganesh9@gmail.com
     ```

4. **Deploy to Netlify:**
   ```bash
   netlify deploy --prod
   ```

5. **Update frontend `.env`:**
   ```env
   VITE_API_URL=https://your-project.netlify.app/api
   ```

### File Structure:
```
netlify/
  functions/
    contact.js    ← Netlify function
netlify.toml      ← Netlify configuration
```

---

## Update Contact.jsx for FormData

Since serverless functions typically receive JSON (not FormData), you'll need to update the Contact.jsx to send JSON instead:

### Update the handleSubmit function in Contact.jsx:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus({ type: '', message: '' });

  try {
    const API_URL = getApiBaseUrl();
    
    // Send as JSON instead of FormData
    const payload = {
      name: formData.name,
      company: formData.company,
      email: formData.email,
      mobile: formData.mobile,
      message: formData.message,
    };

    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // ... rest of the code remains the same
  } catch (error) {
    // ... error handling
  }
};
```

**Note:** File uploads are not included in this serverless version. If you need file uploads, you would need to use a service like Cloudinary or AWS S3, or stick with the Express server approach.

---

## Environment Variables Summary

Add these to your hosting platform (Vercel/Netlify):

```env
EMAIL_USER=tejaannangi1996@gmail.com
EMAIL_APP_PASSWORD=zmnxembklkfmwrox
ADMIN_EMAIL=dhanasriganesh9@gmail.com
```

---

## Testing Locally (Optional)

### For Vercel:
```bash
vercel dev
```

### For Netlify:
```bash
netlify dev
```

This will start a local server that simulates the serverless environment.


