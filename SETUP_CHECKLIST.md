# Setup Checklist - Contact Form

## ✅ Step 1: Backend .env (Already Done!)
You've already created `server/.env` with:
- ✅ PORT=3001
- ✅ FRONTEND_URL=http://localhost:5173
- ✅ EMAIL_USER=tejaannangi1996@gmail.com
- ✅ EMAIL_APP_PASSWORD=zmnxembklkfmwrox
- ✅ ADMIN_EMAIL=dhanasriganesh9@gmail.com

## ⚠️ Step 2: Frontend .env (Required!)
Create a `.env` file in the **ROOT directory** (same folder as `package.json`, NOT in the server folder):

**Create `.env` in root directory with:**
```env
VITE_API_URL=http://localhost:3001/api
```

## Step 3: Install Backend Dependencies

```bash
cd server
npm install
```

## Step 4: Start Backend Server

In the `server` folder, run:
```bash
npm run dev
```

You should see:
```
Server is running on port 3001
Health check: http://localhost:3001/health
```

## Step 5: Restart Frontend Server

After creating the root `.env` file, restart your frontend:
1. Stop the current frontend server (Ctrl+C)
2. Start it again: `npm run dev`

## Step 6: Test

1. Open browser: `http://localhost:3001/health` - Should return `{"status":"OK","message":"Server is running"}`
2. Test the contact form on your frontend

## Summary

You need **TWO** `.env` files:

1. **Root `.env`** (for frontend):
   ```
   VITE_API_URL=http://localhost:3001/api
   ```

2. **server/.env** (for backend) - ✅ Already done!

Both servers should be running:
- Frontend: `npm run dev` (usually port 5173)
- Backend: `cd server && npm run dev` (port 3001)


