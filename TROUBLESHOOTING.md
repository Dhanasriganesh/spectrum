# Troubleshooting: Contact Form 404 Error

## Problem
Getting a 404 error when submitting the contact form:
- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Error submitting form: Error: Server error. Please try again later.`

## Solution

### Step 1: Create Frontend `.env` File

Create a `.env` file in the **root directory** of your project (same level as `package.json`) with:

```env
VITE_API_URL=http://localhost:3001/api
```

**Important:** After creating/updating `.env`, restart your Vite dev server!

### Step 2: Start the Backend Server

The backend server must be running for the contact form to work.

1. **Open a new terminal window/tab**
2. **Navigate to the server folder:**
   ```bash
   cd server
   ```

3. **Install dependencies (if not already done):**
   ```bash
   npm install
   ```

4. **Create `.env` file in the `server` folder** (if not already created):
   ```env
   PORT=3001
   FRONTEND_URL=http://localhost:5173
   EMAIL_USER=your-email@gmail.com
   EMAIL_APP_PASSWORD=your-app-password-here
   ADMIN_EMAIL=dhanasriganesh9@gmail.com
   ```

5. **Start the server:**
   ```bash
   npm run dev
   ```

   You should see:
   ```
   Server is running on port 3001
   Health check: http://localhost:3001/health
   ```

### Step 3: Verify Both Servers Are Running

You should have **two terminals running**:

1. **Terminal 1** - Frontend (Vite):
   ```bash
   npm run dev
   ```
   Running on: `http://localhost:5173`

2. **Terminal 2** - Backend (Express):
   ```bash
   cd server
   npm run dev
   ```
   Running on: `http://localhost:3001`

### Step 4: Test the API Endpoint

You can test if the backend is working by visiting:
- `http://localhost:3001/health` - Should return `{"status":"OK","message":"Server is running"}`

### Common Issues

1. **Backend server not running**
   - Solution: Start the backend server (Step 2)

2. **`.env` file missing or incorrect**
   - Solution: Create `.env` in root directory with `VITE_API_URL=http://localhost:3001/api`

3. **Vite dev server not restarted after `.env` changes**
   - Solution: Stop and restart `npm run dev`

4. **CORS errors**
   - Solution: Make sure `FRONTEND_URL=http://localhost:5173` is in `server/.env`

5. **Port already in use**
   - Solution: Change `PORT=3001` to a different port in `server/.env`, and update `VITE_API_URL` accordingly

### Quick Checklist

- [ ] `.env` file exists in root directory with `VITE_API_URL=http://localhost:3001/api`
- [ ] `.env` file exists in `server` folder with all required variables
- [ ] Backend server is running on port 3001
- [ ] Frontend dev server is running on port 5173
- [ ] Both servers were restarted after creating/updating `.env` files
- [ ] `http://localhost:3001/health` returns OK

### Still Not Working?

1. Check the browser console for the exact error
2. Check the backend terminal for error messages
3. Verify the backend server is accessible: `http://localhost:3001/health`
4. Make sure no firewall is blocking port 3001


