# 🚀 Deployment Guide for Artistry Hub

## ✅ Security Checklist Completed

- ✅ No API keys exposed in code
- ✅ `.env` file is in `.gitignore`
- ✅ `.env.example` provided for developers
- ✅ No `console.log` statements in production code
- ✅ No sensitive information in README or code
- ✅ Environment variables used for all secrets

---

## 🌐 Deploy to Netlify

### Option 1: Deploy via Netlify UI (Recommended)

1. **Connect Repository**
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify
   - Select repository: `Abhishhek-Verma/Artistry-Hub`

2. **Configure Build Settings**
   ```
   Base directory: React Js
   Build command: npm run build
   Publish directory: React Js/build
   ```

3. **Add Environment Variables**
   - Go to: Site settings → Environment variables
   - Add the following variable:
   
   | Key | Value |
   |-----|-------|
   | `REACT_APP_CLERK_PUBLISHABLE_KEY` | `pk_test_cHJlcGFyZWQtZ29waGVyLTE3LmNsZXJrLmFjY291bnRzLmRldiQ` |

4. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete (~2-3 minutes)
   - Your site will be live at: `https://random-name.netlify.app`

5. **Custom Domain (Optional)**
   - Go to: Site settings → Domain management
   - Add your custom domain
   - Follow DNS configuration instructions

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Navigate to project
cd "React Js"

# Deploy to production
netlify deploy --prod

# Follow prompts:
# - Build command: npm run build
# - Publish directory: build
# - Site name: artistry-hub (or your choice)
```

After deployment, add environment variables:
```bash
netlify env:set REACT_APP_CLERK_PUBLISHABLE_KEY pk_test_cHJlcGFyZWQtZ29waGVyLTE3LmNsZXJrLmFjY291bnRzLmRldiQ
```

### Option 3: netlify.toml Configuration

Create `netlify.toml` in the root directory:

```toml
[build]
  base = "React Js"
  command = "npm run build"
  publish = "build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 🔐 Clerk Dashboard Configuration

After deploying to Netlify, update Clerk settings:

1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Select your application
3. Navigate to: **Settings** → **Domains**
4. Add your Netlify domain:
   - Development: `http://localhost:3000`
   - Production: `https://your-site.netlify.app`

---

## ⚙️ Environment Variables Reference

For deployment, you need these environment variables:

### Production Environment Variables

```bash
# Clerk Authentication (Required)
REACT_APP_CLERK_PUBLISHABLE_KEY=pk_test_cHJlcGFyZWQtZ29waGVyLTE3LmNsZXJrLmFjY291bnRzLmRldiQ
```

### Development Environment Variables

Create `.env` file in `React Js/` directory:

```bash
# Copy from .env.example
cp .env.example .env

# Add your keys
REACT_APP_CLERK_PUBLISHABLE_KEY=pk_test_cHJlcGFyZWQtZ29waGVyLTE3LmNsZXJrLmFjY291bnRzLmRldiQ
```

---

## 📦 Build Configuration

### Build Command
```bash
npm run build
```

### Output Directory
```
React Js/build/
```

### Node Version
- Minimum: Node.js 14.x
- Recommended: Node.js 18.x or 20.x

### Build Time
- ~2-3 minutes (depending on server)

---

## 🌍 Deploy to Other Platforms

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd "React Js"
   vercel
   ```

3. **Add Environment Variables**
   - Go to Vercel dashboard
   - Settings → Environment Variables
   - Add `REACT_APP_CLERK_PUBLISHABLE_KEY`

4. **Build Settings**
   ```
   Framework Preset: Create React App
   Build Command: npm run build
   Output Directory: build
   Install Command: npm install
   ```

### GitHub Pages

1. **Install gh-pages**
   ```bash
   cd "React Js"
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://abhishhek-verma.github.io/Artistry-Hub",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

---

## 🔍 Post-Deployment Checklist

- [ ] Site loads successfully
- [ ] Logo displays correctly
- [ ] Navigation links work
- [ ] "Get Started" button opens Clerk modal
- [ ] Can sign up/sign in successfully
- [ ] Dashboard accessible after login
- [ ] Upload page loads
- [ ] Portfolio page loads
- [ ] Legal pages (Privacy, Terms, Cookies) accessible
- [ ] Social links work (GitHub, LinkedIn, Email)
- [ ] Mobile responsive design working
- [ ] No console errors in browser

---

## 🐛 Troubleshooting

### Build Fails

**Issue**: Build command fails
```bash
# Solution: Clear cache and reinstall
cd "React Js"
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Clerk Authentication Not Working

**Issue**: Sign-in modal doesn't open
```bash
# Check:
1. REACT_APP_CLERK_PUBLISHABLE_KEY is set
2. Domain is added in Clerk Dashboard
3. Browser console for errors
```

### 404 on Page Refresh

**Issue**: Direct URL access shows 404
```bash
# Solution: Add redirect rule in netlify.toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Environment Variables Not Working

**Issue**: Variables undefined in production
```bash
# Check:
1. Variable name starts with REACT_APP_
2. Added in Netlify/Vercel dashboard
3. Triggered new deployment after adding
```

---

## 📊 Performance Optimization

### Enable Gzip Compression
Already enabled in Netlify by default.

### Asset Optimization
```bash
# Images are optimized
# Using modern image formats (WebP recommended)
```

### Caching
Netlify automatically caches static assets.

---

## 🔒 Security Best Practices

1. ✅ Never commit `.env` file
2. ✅ Use environment variables for all secrets
3. ✅ Keep Clerk keys private
4. ✅ Enable HTTPS (automatic on Netlify)
5. ✅ Regular dependency updates: `npm audit fix`
6. ✅ Content Security Policy headers (optional)

---

## 📞 Support

If you encounter issues:
- Check browser console for errors
- Review Netlify deploy logs
- Contact: abhishekatkiet@gmail.com
- GitHub Issues: https://github.com/Abhishhek-Verma/Artistry-Hub/issues

---

## 🎉 Deployment Complete!

Your Artistry Hub is now live! Share your site:
- 🌐 Live URL: `https://your-site.netlify.app`
- 📱 Mobile-friendly
- 🔐 Secure with HTTPS
- ⚡ Fast CDN delivery

**Next Steps:**
1. Share your portfolio with friends
2. Start uploading artworks
3. Customize pricing plans (edit in `pricing.js`)
4. Add custom domain (optional)
5. Monitor with Netlify Analytics (optional)

---

Made with ❤️ by Abhishek Verma
