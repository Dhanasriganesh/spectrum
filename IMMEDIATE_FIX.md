# Immediate Fix for 404 Error

## The Issue
You're getting `POST http://localhost:5173/api/contact 404 (Not Found)` because there's no serverless function running to handle `/api/contact`.

## Solution: Use Vercel Dev (Runs Everything Locally)

This will run both your frontend and serverless functions together without needing a separate server.

### Quick Steps:

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Create `.env.local` file in root** (Vercel dev reads this):
   ```env
   EMAIL_USER=tejaannangi1996@gmail.com
   EMAIL_APP_PASSWORD=zmnxembklkfmwrox
   ADMIN_EMAIL=dhanasriganesh9@gmail.com
   ```

3. **Create `.env` file in root** (for Vite):
   ```env
   VITE_API_URL=/api
   ```

4. **Stop your current dev server** (Ctrl+C if running)

5. **Run Vercel dev instead:**
   ```bash
   npm run dev:vercel
   ```
   
   Or directly:
   ```bash
   vercel dev
   ```

6. **Vercel will ask some questions - answer:**
   - Set up and deploy? **N** (No, just dev)
   - Which scope? (Choose your account)
   - Link to existing project? **N** (No)
   - What's your project's name? (Press Enter for default)
   - In which directory is your code located? **./** (Press Enter)
   - Want to override settings? **N** (No)

7. **Vercel dev will start** and run on `http://localhost:3000` (or another port)

8. **Update your `.env` if needed:**
   Check what port Vercel is using and update `VITE_API_URL` accordingly, OR just use `/api` (relative path works with Vercel dev)

---

## Alternative: Deploy First (Easier Long-term)

If you want to deploy first and use the deployed URL:

1. **Deploy:**
   ```bash
   npm i -g vercel
   vercel --prod
   ```

2. **Get your URL** (e.g., `https://your-project.vercel.app`)

3. **Create `.env` in root:**
   ```env
   VITE_API_URL=https://your-project.vercel.app/api
   ```

4. **Set environment variables in Vercel dashboard:**
   - Go to project → Settings → Environment Variables
   - Add: `EMAIL_USER`, `EMAIL_APP_PASSWORD`, `ADMIN_EMAIL`

5. **Restart:**
   ```bash
   npm run dev
   ```

---

## Which Should You Use?

- **For immediate local testing:** Use `vercel dev` (Option 1)
- **For production/testing deployed functions:** Deploy first (Option 2)


