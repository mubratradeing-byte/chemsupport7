# 🧪 Mubra AI 8.v1 - Advanced Chemistry Intelligence

![Mubra AI](https://img.shields.io/badge/Mubra-AI%208.v1-001F3F?style=flat-square&logo=github) ![Chemistry](https://img.shields.io/badge/Subject-A%2FL%20Chemistry-D4AF37?style=flat-square) ![Language](https://img.shields.io/badge/Language-Sinhala%20Medium-00AA00?style=flat-square)

A **professional, luxury-themed Single Page Application** for Sri Lankan A/L Chemistry students, featuring AI-powered explanations, past papers archive, and advanced chemistry analysis.

---

## 🎯 Features

### 🔒 Security & Activation
- **System Activation Modal**: 16-digit activation code verification
- **Stealth Mode**: No visible references to third-party AI services (Google/Gemini)
- **Proprietary Branding**: Fully branded as Mubra Webworks product

### 🎨 UI/UX Design
- **Luxury Theme**: Navy Blue (#001F3F) + Metallic Gold (#D4AF37)
- **Geometric Wolf Logo**: Faceted SVG design with glowing gold eyes
- **Responsive Layout**: Desktop-first with mobile fallback
- **Smooth Animations**: Fade-ins, slides, glows, and transitions

### 📚 Features
- **Past Papers Database**: 1985-2025 A/L Chemistry papers
- **Chat Interface**: User bubbles (Navy) vs AI bubbles (White with gold border)
- **Image Upload**: Camera icon to analyze chemistry diagrams
- **Math Support**: Full KaTeX rendering for chemical formulas ($H_2SO_4$)
- **Sinhala Medium**: Complete Sinhala-language interface and responses

### 🧬 AI Capabilities
- Organic Chemistry explanations
- Inorganic Chemistry analysis
- Physical Chemistry problem-solving
- Marking scheme style responses
- Image-based chemistry diagram analysis

---

## 🚀 Quick Start

### 1. Download Files
```bash
git clone https://github.com/yourusername/mubra-ai-8.git
cd mubra-ai-8
```

### 2. Get Gemini API Key
1. Visit [Google AI Studio](https://aistudio.google.com/app/apikeys)
2. Click "Get API Key" → "Create API key in new project"
3. Copy your API key

### 3. Configure API
Open `index.html` and replace this line:
```javascript
const CONFIG = {
    API_KEY: 'YOUR_GEMINI_API_KEY_HERE', // Replace with actual key
    // ... rest of config
};
```

With:
```javascript
const CONFIG = {
    API_KEY: 'YOUR_ACTUAL_API_KEY_HERE',
    // ... rest of config
};
```

### 4. Deploy to GitHub Pages
```bash
git add .
git commit -m "Deploy Mubra AI 8.v1"
git push origin main
```

Visit: `https://yourusername.github.io/mubra-ai-8/`

---

## 🔐 Activation Code

Use any valid 16-digit code in format: `XXXX-XXXX-XXXX-XXXX`

Examples:
- `1234-5678-9012-3456`
- `9999-8888-7777-6666`
- `0000-1111-2222-3333`

---

## 📖 Usage Guide

### Starting a Chemistry Query
1. Click **"System Activation"** button in header
2. Enter 16-digit activation code (any valid format)
3. Type your chemistry question in Sinhala
4. Click **"Send"** or press Shift+Enter

### Image Analysis
1. Click **camera icon** in input area
2. Select a chemistry diagram/structure
3. AI analyzes and explains in Sinhala

### Past Papers
- Click any year button in sidebar (2025-1985)
- Request specific questions: "2024 Paper 1 Q3 പെ(b)"
- Get detailed marking-scheme answers

---

## 🎓 Supported Queries

### Organic Chemistry
- Reaction mechanisms
- Functional group transformations
- Isomerism (structural, stereoisomerism)
- Synthesis routes
- Spectroscopy (NMR, IR, MS)

### Inorganic Chemistry
- Coordination compounds
- Periodic trends
- Redox reactions
- Thermodynamics
- d-block chemistry

### Physical Chemistry
- Kinetics and rates
- Equilibrium calculations
- Thermochemistry
- Electrochemistry
- Quantum mechanics basics

---

## 🛠 Technical Stack

| Component | Technology |
|-----------|-----------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Math Rendering | KaTeX 0.16.0 |
| Icons | Font Awesome 6.4.0 |
| AI API | Google Gemini 2.0 Flash |
| Deployment | GitHub Pages |
| Responsive | CSS Grid, Flexbox |

---

## 📁 File Structure

```
mubra-ai-8/
├── index.html           # Main application (all-in-one file)
├── README.md            # This file
├── config.example.json  # Configuration template
└── DEPLOYMENT.md        # Deployment guide
```

---

## 🎨 Design System

### Color Palette
```
Primary:      #001F3F (Navy Blue)
Secondary:    #003D7A (Dark Navy)
Accent:       #D4AF37 (Metallic Gold)
Gold Dark:    #B8860B (Dark Gold)
Background:   #F5F5F5 (Light Gray)
Text:         #333333 (Dark Gray)
White:        #FFFFFF
```

### Typography
- **Display Font**: Segoe UI (system font stack)
- **Heading**: 16-20px, Font-weight 700
- **Body**: 14px, Font-weight 400
- **Code**: Courier New, monospace (16px for activation codes)

### Spacing
- **Sidebar**: 320px width
- **Chat Padding**: 30px
- **Message Gap**: 15px
- **Component Gap**: 10px

---

## 🔄 API Integration

### Request Structure
```javascript
{
  "contents": [{
    "role": "user",
    "parts": [{
      "text": "System prompt + user question"
    }]
  }],
  "generationConfig": {
    "temperature": 0.7,
    "topK": 40,
    "topP": 0.95,
    "maxOutputTokens": 2048
  }
}
```

### Image Analysis
```javascript
{
  "contents": [{
    "role": "user",
    "parts": [
      {
        "inline_data": {
          "mime_type": "image/jpeg",
          "data": "base64_encoded_image"
        }
      },
      {
        "text": "Analyze this chemistry image..."
      }
    ]
  }]
}
```

---

## ⚠️ Important Notes

### Before Production
1. **Never commit API keys** to GitHub
2. **Use environment variables** for sensitive data
3. **Test activation flow** thoroughly
4. **Verify KaTeX rendering** for chemistry formulas
5. **Check responsive design** on mobile devices

### API Rate Limits
- Gemini Free Tier: 60 requests/minute
- Upgrade to paid plan for higher limits
- Monitor usage in Google Cloud Console

### Browser Support
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ Mobile browsers (responsive but optimized for desktop)

---

## 🔧 Customization

### Change Colors
Edit `:root` CSS variables:
```css
:root {
    --primary: #001F3F;
    --gold: #D4AF37;
    /* ... */
}
```

### Add More Past Papers
Edit sidebar papers grid:
```html
<button class="paper-btn">2026 A/L</button>
```

### Modify System Prompt
Update in `CONFIG` object:
```javascript
const CONFIG = {
    SYSTEM_PROMPT: 'Your custom system prompt here...'
};
```

### Change Logo
Replace SVG in `.logo-container`:
```html
<svg class="logo-svg" viewBox="0 0 200 200">
    <!-- Your custom SVG -->
</svg>
```

---

## 🐛 Troubleshooting

### API Key Not Working
- ✓ Verify key is valid from Google AI Studio
- ✓ Check quota limits in Google Cloud Console
- ✓ Ensure no extra spaces in key

### KaTeX Not Rendering
- ✓ Check formula syntax: `$formula$` or `$$formula$$`
- ✓ Verify CDN link is working
- ✓ Open browser console for errors

### Activation Code Issues
- ✓ Format: XXXX-XXXX-XXXX-XXXX (16 digits, 3 hyphens)
- ✓ Only numbers allowed
- ✓ Must be exactly 19 characters

### Chat Not Scrolling
- ✓ Check scrollbar CSS in `::-webkit-scrollbar`
- ✓ Verify `.chat-messages` has `flex: 1`
- ✓ Clear browser cache

---

## 📞 Support

### Common Issues
1. **Slow responses**: Check internet connection, API rate limits
2. **Image not uploading**: Verify file size <5MB, format is JPG/PNG
3. **Sinhala text not displaying**: Check font support, character encoding UTF-8

### Contact
- **Developer**: Mubra Webworks
- **Support**: info@mubra.lk
- **Issues**: GitHub Issues

---

## 📄 License

This project is proprietary software by Mubra Webworks. 
Unauthorized copying, distribution, or modification is prohibited.

**© 2024-2025 Mubra Webworks. All Rights Reserved.**

---

## 🎓 About Mubra AI 8.v1

**Mubra AI 8.v1** is the latest generation of advanced chemistry intelligence systems, specifically trained for Sri Lankan A/L Chemistry curriculum. 

**Features:**
- 🏆 Marking-scheme style explanations
- 📊 Past papers analysis (1985-2025)
- 🧬 Organic/Inorganic/Physical Chemistry expertise
- 🌐 100% Sinhala medium interface
- 🔒 Secure, proprietary branding
- ⚡ Ultra-fast response times

**Main Sponsor**: Mubra Trading
**Powered by**: Mubra Webworks

---

## 🚀 Future Roadmap

- [ ] Offline mode support
- [ ] Practice questions generator
- [ ] Mock exam simulator
- [ ] Video explanations library
- [ ] Collaboration features
- [ ] Mobile native apps
- [ ] Advanced chemistry simulations
- [ ] Student progress tracking

---

**Last Updated**: March 2025
**Version**: 8.v1 (Final Release)
**Status**: Production Ready ✅
