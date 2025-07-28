# Deployment Guide

## Issues Fixed

### 1. NPM Dependency Conflicts ✅

- **Problem**: `react-stripe-js` package was incompatible with React 18
- **Solution**: Removed `react-stripe-js` and updated to `@stripe/react-stripe-js@2.4.0`
- **Result**: No more peer dependency warnings

### 2. Vercel 404 Routing Issues ✅

- **Problem**: `/donate` route returning 404 on Vercel
- **Solution**: Added multiple routing configurations

## Routing Configuration

### Option 1: vercel.json (Primary)

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Option 2: \_redirects file (Backup)

Created `public/_redirects`:

```
/*    /index.html   200
```

## Deployment Steps

1. **Commit and push your changes:**

   ```bash
   git add .
   git commit -m "Fix Vercel routing and npm dependencies"
   git push
   ```

2. **Redeploy on Vercel:**

   - Go to your Vercel dashboard
   - Trigger a new deployment
   - The routing should now work correctly

3. **Verify the fix:**
   - Visit `https://your-domain.vercel.app/donate`
   - Should now load the donation page instead of 404

## Testing Locally

```bash
npm run dev
```

Then visit `http://localhost:5173/donate` to test the routing locally.

## Troubleshooting

If you still see 404 errors:

1. **Clear Vercel cache:**

   - Go to Vercel dashboard → Project Settings → General
   - Click "Clear Build Cache"

2. **Force redeploy:**

   - Make a small change to any file
   - Commit and push
   - This will trigger a fresh deployment

3. **Check Vercel logs:**
   - Go to Vercel dashboard → Deployments
   - Click on the latest deployment
   - Check the build logs for any errors

## File Structure

```
├── vercel.json          # Vercel routing configuration
├── public/
│   └── _redirects      # Alternative routing (Netlify-style)
├── src/
│   ├── App.tsx         # React Router configuration
│   └── pages/
│       └── DonationPage.tsx
```

The routing should now work correctly on Vercel! 🎉
