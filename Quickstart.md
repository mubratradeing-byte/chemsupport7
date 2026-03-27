# ⚡ Mubra AI 8.v1 - Quick Start Guide (5 Minutes)

## 🎯 Before You Start

You need:
- GitHub account (free: https://github.com/signup)
- Google account
- Text editor (VS Code, Notepad, etc.)
- 5 minutes of time ⏱️

---

## 🚀 5-Minute Setup

### Step 1: Get Gemini API Key (2 min)

1. Visit: https://aistudio.google.com/app/apikeys
2. Click **"Create API key"** → **"Create API key in new project"**
3. Copy the key (looks like: `AIzaSyD...`)
4. Keep this tab open! ✅

### Step 2: Add API Key to Code (1 min)

1. Open `index.html` in any text editor
2. Press `Ctrl+F` (or `Cmd+F`), search: `API_KEY:`
3. Find this line:
   ```javascript
   API_KEY: 'YOUR_GEMINI_API_KEY_HERE',
   ```
4. Replace with your key:
   ```javascript
   API_KEY: 'AIzaSyD...',
   ```
5. Save file (`Ctrl+S`)

### Step 3: Create GitHub Repository (1.5 min)

1. Go to: https://github.com/new
2. Repository name: **`mubra-ai-8`** (exactly this)
3. Description: `Mubra AI 8.v1 - Advanced Chemistry Intelligence`
4. Click **"Create repository"** ✅
5. Copy the HTTPS URL (looks like: `https://github.com/yourusername/mubra-ai-8.git`)

### Step 4: Upload Files (0.5 min)

**Option A: Upload via GitHub Web**
1. On your new repository page, click **"uploading an existing file"**
2. Drag & drop or select these files:
   - `index.html`
   - `README.md`
   - `DEPLOYMENT.md`
   - `.gitignore`
   - `config.example.json`
3. Click **"Commit changes"** ✅

**Option B: Upload via Git Command**
```bash
git clone https://github.com/yourusername/mubra-ai-8.git
cd mubra-ai-8
# Copy files here
git add .
git commit -m "Initial commit"
git push origin main
```

### Step 5: Enable GitHub Pages (1 min)

1. Go to your repository
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save** ✅
6. Wait 1-2 minutes...

### Step 6: Access Your App! ✅

Visit: **`https://yourusername.github.io/mubra-ai-8/`**

Replace `yourusername` with your actual GitHub username!

---

## 🧪 First Test Run

1. Open your app URL
2. Click **"System Activation"** button
3. Enter any 16-digit code (format: `1234-5678-9012-3456`)
4. Try a sample question:
   ```
   $H_2SO_4$ පිළිබඳ කතා කරන්න
   ```
5. ✅ You should get a Sinhala response!

---

## 📸 Test Image Upload

1. Take a screenshot of a chemistry structure
2. Click 📷 camera icon in chat
3. Select your image
4. AI will analyze and explain in Sinhala

---

## ⚠️ Important Security Note

**DO NOT commit your API key to GitHub!**

If you accidentally did:
1. Go to: https://aistudio.google.com/app/apikeys
2. Delete the exposed key
3. Create a new one
4. Update your index.html

---

## 🔧 Troubleshooting

### Problem: 404 Page Not Found
**Solution**: 
- Wait 2-3 minutes for GitHub Pages to deploy
- Check Settings → Pages → ensure "Deploy from a branch" is selected
- Hard refresh browser (Ctrl+Shift+R)

### Problem: "API Error"
**Solution**:
- Verify API key is correct in index.html
- Check if API key has quota: https://console.cloud.google.com
- Open browser console (F12) to see actual error

### Problem: Chat not working
**Solution**:
- Make sure you clicked "System Activation" first
- Entered 16-digit code in correct format
- Try different chemistry question

### Problem: Sinhala text shows as boxes
**Solution**:
- Refresh page (Ctrl+R)
- Try different browser (Chrome, Firefox, Safari)
- Check your internet connection

---

## 📚 Common Questions

**Q: What if I don't have a GitHub account?**
A: Create one free at https://github.com/signup (2 minutes)

**Q: How much does this cost?**
A: Free! GitHub Pages is free. Google Gemini has free tier (60 requests/min).

**Q: Can I use my own domain?**
A: Yes! Go to Settings → Pages → Custom domain. Need DNS access to your domain.

**Q: How often can students ask questions?**
A: Unlimited (free tier = 60 per minute per user)

**Q: What if API quota runs out?**
A: Upgrade to paid Gemini plan or wait for quota reset (monthly)

**Q: Can I modify the design?**
A: Yes! All CSS is in the `<style>` tag. Colors, fonts, layout are customizable.

**Q: Will it work on mobile?**
A: Yes, but optimized for desktop. Mobile works but chat is smaller.

---

## 📊 What's Included

✅ Complete working application
✅ Luxury Navy/Gold theme
✅ Geometric wolf logo
✅ System activation security
✅ Sinhala interface
✅ Math formula support (KaTeX)
✅ Image upload & analysis
✅ Chat history
✅ Past papers sidebar
✅ Fully responsive design
✅ Production-ready code
✅ Comprehensive documentation

---

## 🎓 Next Steps After Setup

1. ✅ Share link with students
2. Test with sample questions
3. Monitor API usage
4. Gather student feedback
5. Plan new features
6. Consider upgrading to paid API

---

## 💡 Tips & Tricks

### Customize Colors
Open `index.html`, find `:root { ... }`, change:
```css
--primary: #001F3F;  /* Navy Blue - change this */
--gold: #D4AF37;     /* Gold accent - change this */
```

### Add More Past Papers
Find this section in sidebar:
```html
<button class="paper-btn">2025 A/L</button>
```
Add more buttons for older years.

### Change System Prompt
In JavaScript section, find `CONFIG.SYSTEM_PROMPT` and modify the Sinhala text.

### Add Custom Branding
Update sidebar footer text:
```html
<div>Powered by YOUR COMPANY</div>
```

---

## 📞 Support

- **GitHub Issues**: Create issue in your repository
- **Documentation**: Read `README.md` and `DEPLOYMENT.md`
- **API Help**: https://ai.google.dev/docs
- **GitHub Help**: https://docs.github.com

---

## 🎉 You're Done!

Your Mubra AI 8.v1 is now live! 

**Share with students:**
```
https://yourusername.github.io/mubra-ai-8/
```

**Key reminder:**
- Keep API key secret ✅
- Test before sharing ✅
- Monitor usage ✅
- Gather feedback ✅

---

**Total Time Spent**: ~5 minutes ⏱️
**Result**: Professional chemistry AI app ✅
**Status**: Production Ready 🚀

**Congratulations!** 🎓
