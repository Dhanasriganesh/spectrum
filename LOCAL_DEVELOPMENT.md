# Local Development with Serverless Functions

Since you're using serverless functions, you have two options for local development:

## Option 1: Use Vercel Dev (Recommended for Local Testing)

Vercel CLI can run both your frontend and serverless functions locally.

### Setup:

1. **Install Vercel CLI globally:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel (if not already):**
   ```bash
   vercel login
   ```

3. **Link your project (if deploying to Vercel):**
   ```bash
   vercel link
   ```

4. **Run development server:**
   ```bash
   vercel dev
   ```
   
   This will:
   - Start your Vite frontend
   - Run your serverless functions locally
   - Proxy `/api/*` requests to the serverless functions

5. **Create `.env` file in root with:**
   ```env
   EMAIL_USER=tejaannangi1996@gmail.com
   EMAIL_APP_PASSWORD=zmnxembklkfmwrox
   ADMIN_EMAIL=dhanasriganesh9@gmail.com
   ```

6. **Update `vite.config.js` to use `/api` (which Vercel dev proxies):**
   - Your `.env` should have: `VITE_API_URL=/api` (or just use the default)

**OR** remove `VITE_API_URL` from `.env` and let it default to `/api` in Contact.jsx

---

## Option 2: Use Deployed Serverless Function (Easiest)

If you've already deployed to Vercel/Netlify:

1. **Deploy your project:**
   ```bash
   vercel  # or netlify deploy --prod
   ```

2. **Copy your deployment URL** (e.g., `https://your-project.vercel.app`)

3. **Create `.env` file in root:**
   ```env
   VITE_API_URL=https://your-project.vercel.app/api
   ```

4. **Restart your dev server:**
   ```bash
   npm run dev
   ```

Now your local frontend will call the deployed serverless function.

---

## Option 3: Use Vite Proxy (Alternative)

If you want to keep using `npm run dev` but proxy to a deployed function:

1. **Update `vite.config.js`:**
   ```js
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import tailwindcss from '@tailwindcss/vite'

   export default defineConfig({
     plugins: [react(), tailwindcss()],
     server: {
       proxy: {
         '/api': {
           target: 'https://your-deployed-function.vercel.app',
           changeOrigin: true,
           rewrite: (path) => path.replace(/^\/api/, '/api'),
         }
       }
     }
   })
   ```

2. **Keep `.env` with:**
   ```env
   VITE_API_URL=/api
   ```

---

## Quick Start (Recommended)

**For immediate testing, use Option 2:**

1. Deploy to Vercel: `vercel --prod`
2. Get your URL
3. Create `.env`: `VITE_API_URL=https://your-url.vercel.app/api`
4. Restart: `npm run dev`

This way you don't need any additional tools and can test immediately!


