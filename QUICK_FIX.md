# Quick Fix: 404 Error on Contact Form

## The Problem
Your frontend is trying to call `/api/contact` on `localhost:5173`, but there's no server running.

## Solution: Deploy Serverless Function First

Since you want serverless, the easiest solution is to deploy your serverless function and point to it.

### Step 1: Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (first time will ask you to login and setup)
vercel --prod
```

After deployment, you'll get a URL like: `https://your-project-xyz.vercel.app`

### Step 2: Set Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Go to Settings → Environment Variables
3. Add these:
   ```
   EMAIL_USER=tejaannangi1996@gmail.com
   EMAIL_APP_PASSWORD=zmnxembklkfmwrox
   ADMIN_EMAIL=dhanasriganesh9@gmail.com
   ```
4. Redeploy (or it will auto-redeploy)

### Step 3: Create `.env` File in Root

Create a `.env` file in your project root (same folder as `package.json`):

```env
VITE_API_URL=https://your-project-xyz.vercel.app/api
```

Replace `your-project-xyz.vercel.app` with your actual Vercel deployment URL.

### Step 4: Restart Frontend

```bash
# Stop current server (Ctrl+C)
# Then restart:
npm run dev
```

### Step 5: Test

Now when you submit the contact form, it will call your deployed serverless function! ✅

---

## Alternative: Use Vercel Dev for Local Development

If you want to test serverless functions locally:

```bash
# Install Vercel CLI
npm i -g vercel

# Run dev mode (handles both frontend and serverless functions)
vercel dev
```

This runs everything locally including your serverless functions.

---

## Still Getting 404?

1. Make sure you deployed to Vercel
2. Check that your `.env` file has the correct URL
3. Restart your dev server after creating/updating `.env`
4. Check browser console for the exact URL it's trying to call


