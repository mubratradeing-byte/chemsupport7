# 🚀 Mubra AI 8.v1 - Complete Deployment Guide

## Step 1: Prepare Your Repository

### Option A: Fresh GitHub Repository

```bash
# Create new directory
mkdir mubra-ai-8
cd mubra-ai-8

# Initialize Git
git init
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Create README
echo "# Mubra AI 8.v1" > README.md

# Initial commit
git add .
git commit -m "Initial commit"
```

### Option B: Clone Existing Repository

```bash
git clone https://github.com/yourusername/mubra-ai-8.git
cd mubra-ai-8
```

---

## Step 2: Add Project Files

1. Copy `index.html` to repository root
2. Copy `README.md` to repository root
3. Create `.gitignore`:

```bash
cat > .gitignore << 'EOF'
.DS_Store
*.log
node_modules/
.env
*.swp
EOF
```

---

## Step 3: Configure Google Gemini API

### Get API Key

1. Visit: https://aistudio.google.com/app/apikeys
2. Click **"Create API key"**
3. Copy the generated key

### Add to Project

**Option A: Direct (Simple, for testing only)**

Edit `index.html`, find this line:
```javascript
API_KEY: 'YOUR_GEMINI_API_KEY_HERE',
```

Replace with:
```javascript
API_KEY: 'sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
```

**⚠️ WARNING**: Do NOT commit API key to public GitHub!

**Option B: Environment Variable (Recommended)**

Create `.env` file (never commit this):
```
VITE_GEMINI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Update `index.html`:
```javascript
API_KEY: process.env.VITE_GEMINI_API_KEY || 'YOUR_KEY_HERE',
```

**Option C: Backend Proxy (Most Secure)**

Create a simple backend (Node.js + Express):

```javascript
// server.js
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
    try {
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
            req.body
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => console.log('Server running on :3000'));
```

---

## Step 4: Commit to GitHub

### Push to GitHub

```bash
# Add all files
git add .

# Commit
git commit -m "Add Mubra AI 8.v1 - Advanced Chemistry Intelligence"

# Add remote (if not cloned)
git remote add origin https://github.com/yourusername/mubra-ai-8.git

# Push to main branch
git branch -M main
git push -u origin main
```

---

## Step 5: Enable GitHub Pages

### Method 1: GitHub Web UI

1. Go to: https://github.com/yourusername/mubra-ai-8
2. Click **Settings** (top right)
3. Scroll to **"Pages"** (left sidebar)
4. **Source**: Select "Deploy from a branch"
5. **Branch**: Select `main`
6. **Folder**: Select `/ (root)`
7. Click **Save**
8. Wait 1-2 minutes for deployment

### Method 2: GitHub CLI

```bash
# Install GitHub CLI if not installed
# https://cli.github.com/

gh repo edit --enable-pages -s main -p /
```

---

## Step 6: Verify Deployment

### Check Deployment Status

1. Go to: https://github.com/yourusername/mubra-ai-8/deployments
2. Look for "github-pages" deployment
3. Status should be **"Active"** ✅

### Access Your App

- **URL**: `https://yourusername.github.io/mubra-ai-8/`
- Test the activation system
- Try a sample chemistry question

---

## Step 7: Custom Domain (Optional)

### Add Custom Domain

1. In GitHub **Settings** → **Pages**
2. Enter domain: `chemistry.yourdomain.com`
3. Update DNS records:

```
Type: CNAME
Name: chemistry
Value: yourusername.github.io
```

4. Wait 24-48 hours for DNS propagation

---

## Step 8: Security Best Practices

### Protect Your API Key

**❌ DO NOT:**
```javascript
// ❌ NEVER do this in public repo
const API_KEY = 'sk-proj-xxxxxxxxxxx'; // Visible to everyone!
```

**✅ DO USE:**
```javascript
// ✅ Use GitHub Secrets for CI/CD
// ✅ Use backend proxy
// ✅ Use environment variables locally
```

### Set GitHub Secrets (for CI/CD)

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Name: `GEMINI_API_KEY`
4. Value: `sk-proj-xxxxxxxxxxxxx`
5. Click **Add secret**

### Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Mubra AI

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Build and Deploy
        env:
          GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
        run: |
          # Replace API key in build
          sed -i "s|YOUR_GEMINI_API_KEY_HERE|$GEMINI_API_KEY|g" index.html
          
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: .
```

---

## Troubleshooting Deployment

### Issue: 404 Error

**Problem**: Page shows 404 after deployment

**Solution**:
```bash
# Check if index.html exists
git ls-files | grep index.html

# Verify correct branch is deployed
# Settings → Pages → Check "Deploy from a branch"
```

### Issue: API Not Working

**Problem**: Chat returns error "API Error"

**Solution**:
1. Verify API key is correct
2. Check if API key has quota remaining
3. Open browser DevTools (F12) → Console
4. Look for actual error message
5. Verify CORS is not blocking request

### Issue: Styles Not Loading

**Problem**: Page loads but styling is missing

**Solution**:
```bash
# Clear browser cache
Ctrl+Shift+Delete (Windows) or Cmd+Shift+Delete (Mac)

# Hard refresh
Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

# Check CSS is inline (it should be in index.html)
```

### Issue: Sinhala Text Not Showing

**Problem**: Sinhala characters display as boxes

**Solution**:
1. Ensure file encoding is UTF-8
2. Check `<meta charset="UTF-8">`
3. Verify browser supports Sinhala fonts
4. Try different browser

---

## Performance Optimization

### Reduce Bundle Size

```html
<!-- CDN Optimization -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
<!-- ✅ Already minimized -->
```

### Enable Caching

Create `_headers` file:

```
/index.html
  Cache-Control: no-cache

/*.css
  Cache-Control: max-age=31536000

/*.js
  Cache-Control: max-age=31536000
```

### Monitor Performance

Use GitHub Actions to check performance:

```yaml
- name: Check Performance
  run: |
    # Measure HTML size
    ls -lh index.html
    
    # Check for console errors
    echo "Performance: GOOD ✅"
```

---

## Monitoring & Logs

### View Deployment Logs

```bash
# Using GitHub CLI
gh run list --workflow=pages.yml

# View specific run
gh run view <run-id> --log
```

### Check Analytics

1. Go to **Settings** → **Pages**
2. Scroll to **"Traffic"** section
3. See visitor statistics

---

## Update & Maintenance

### Push Updates

```bash
# Make changes to index.html
nano index.html

# Commit and push
git add index.html
git commit -m "Update: Improved chat styling"
git push origin main

# GitHub Pages auto-deploys! ✅
```

### Scheduled Updates

```bash
# Update past papers automatically
git add README.md
git commit -m "Update: Add 2025 June papers"
git push origin main
```

---

## Rollback to Previous Version

```bash
# View commit history
git log --oneline

# Revert to specific commit
git revert <commit-hash>
git push origin main

# GitHub Pages updates automatically
```

---

## Advanced: Using GitHub Actions

### Auto-Deploy on Push

Create `.github/workflows/pages.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v3
```

---

## Success Checklist

- [ ] Repository created on GitHub
- [ ] `index.html` uploaded
- [ ] `README.md` uploaded
- [ ] GitHub Pages enabled
- [ ] Custom domain configured (optional)
- [ ] API key secured
- [ ] Deployment verified at `https://yourusername.github.io/mubra-ai-8/`
- [ ] Activation system tested
- [ ] Chat functionality verified
- [ ] Math rendering (KaTeX) tested
- [ ] Mobile responsiveness checked
- [ ] Performance optimized

---

## 📞 Deployment Support

### Common Questions

**Q: How long does deployment take?**
A: Usually 1-2 minutes. Check "Deployments" tab.

**Q: Can I use a subdomain?**
A: Yes! Update in GitHub Settings → Pages → Custom domain

**Q: How do I update the content?**
A: Push changes to main branch. GitHub Pages auto-deploys.

**Q: Is HTTPS supported?**
A: Yes! Automatic with GitHub Pages.

**Q: Can I use multiple branches?**
A: Yes! Configure in Settings → Pages → Branch

---

## 🎓 Next Steps

1. ✅ Deploy to GitHub Pages
2. Share link: `https://yourusername.github.io/mubra-ai-8/`
3. Promote to students
4. Monitor usage and feedback
5. Update content regularly
6. Plan version 9.0 features

---

**Need Help?**
- Check GitHub Pages Documentation: https://pages.github.com
- Gemini API Docs: https://ai.google.dev
- GitHub Support: https://support.github.com

**Last Updated**: March 2025
**Deployment Status**: Ready for Production ✅
