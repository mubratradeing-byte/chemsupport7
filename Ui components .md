# 🎨 Mubra AI 8.v1 - UI Components & Design Guide

---

## 🖼️ Visual Component Library

### 1. Header Component

```html
<header class="header">
    <div class="header-title">🧪 Advanced Chemistry Intelligence</div>
    <button class="activation-btn" id="activationBtn">
        <i class="fas fa-shield-alt"></i> System Activation
    </button>
</header>
```

**Styling**:
- Background: White (#FFFFFF)
- Border-bottom: 2px solid #D4AF37 (Gold)
- Shadow: Drop shadow effect
- Height: 60px
- Padding: 15px 30px

**Interaction**:
- Hover: Button glows with gold
- Click: Opens activation modal
- Icon: Shield icon from Font Awesome

---

### 2. Sidebar Component

```
┌──────────────────────────────┐
│  Logo & Branding             │
│  ┌────────────────────────┐  │
│  │  [Geometric Wolf Logo] │  │
│  │    Mubra AI 8.v1       │  │
│  └────────────────────────┘  │
│                              │
│  Past Papers 📚              │
│  ┌────────┐  ┌────────┐      │
│  │2025 A/L│  │2024 A/L│      │
│  └────────┘  └────────┘      │
│  ┌────────┐  ┌────────┐      │
│  │2023 A/L│  │2022 A/L│      │
│  └────────┘  └────────┘      │
│  ... (12 papers total)       │
│                              │
│  ─────────────────────────   │
│  Powered by Mubra Webworks   │
│  Main Sponsor: Mubra Trading │
└──────────────────────────────┘
```

**Colors**:
- Background: #001F3F (Navy)
- Text: #FFFFFF (White)
- Border: 2px solid #D4AF37 (Gold)
- Buttons: rgba(212, 175, 55, 0.1) with hover to solid gold

**Width**: 320px (fixed)
**Features**:
- Scrollable papers grid
- Sticky header/footer
- Responsive collapse on mobile

---

### 3. Logo Component (SVG)

**Geometric Wolf Head Design**:
```
Features:
├── Inverted Triangle (white outline)
├── Wolf Head (faceted/polygonal)
│   ├── Left Ear
│   ├── Right Ear
│   ├── Face Planes (semi-transparent)
│   ├── Snout
│   ├── Eyes with Gold Glow ✨
│   └── Nose (gold)
└── Metallic Gold Rings
    ├── Outer ring (opacity 0.7)
    ├── Inner ring (opacity 0.6)
    └── Interweaving effect
```

**SVG Attributes**:
- Size: 120x120px
- ViewBox: 0 0 200 200
- Filter: Drop shadow for glow
- Animation: Eyes glow (2s infinite)

**Colors**:
- Wolf/Triangle: #FFFFFF (White)
- Eyes: #D4AF37 (Gold) with glow filter
- Rings: #D4AF37 and #FFD700 (Gold variations)

---

### 4. Chat Message Components

#### User Message Bubble

```
┌─────────────────────────────────┐
│  Your Chemistry Question here   │
│  Can include $H_2SO_4$ formulas │
└─────────────────────────────────┘
(Navy blue, right-aligned)
```

**Styling**:
- Background: #001F3F (Navy)
- Text Color: #FFFFFF (White)
- Padding: 14px 18px
- Border-radius: 12px (top-left only 4px)
- Max-width: 70%
- Box-shadow: Drop shadow

**Interactions**:
- Fade-in animation (0.4s)
- Slide up from bottom

#### AI Message Bubble

```
┌─────────────────────────────────┐
│ AI Response with detailed       │
│ chemistry explanation in Sinhala│
│ ඉතින් ශ්‍රී ලංකා A/L             │
│ KaTeX: $C_6H_6 \rightarrow ...$  │
└─────────────────────────────────┘
(White with 2px gold border, left-aligned)
```

**Styling**:
- Background: #FFFFFF (White)
- Border: 2px solid #D4AF37 (Gold)
- Text Color: #333333 (Dark Gray)
- Padding: 14px 18px
- Border-radius: 12px (bottom-left only 4px)
- Max-width: 70%
- Box-shadow: Drop shadow

**Features**:
- KaTeX math rendering
- Image display support
- Multi-line support
- Fade-in animation

---

### 5. Input Area Component

```
┌─────────────────────────────────────┐
│ [📷] [────── Text Input ──────] [📤] │
│      (Expandable Textarea)    Send   │
└─────────────────────────────────────┘
```

**Components**:

1. **Camera Button**
   - Icon: 📷 (Font Awesome)
   - Size: 40x40px
   - Hover: Background navy, icon gold
   - Click: Opens file picker

2. **Textarea**
   - Placeholder: "ඔබගේ ප්‍රශ්නය ලියන්න..."
   - Auto-resize: Min 1 line, max 5 lines
   - Font: System fonts, 14px
   - Focus: Border gold, shadow effect

3. **Send Button**
   - Text: "📤 Send"
   - Background: Gradient navy to dark navy
   - Color: White
   - Hover: Drop shadow, lift effect
   - Click: Send message, clear input

**Keyboard Shortcuts**:
- Enter: Send message
- Shift+Enter: New line

---

### 6. Activation Modal Component

```
┌──────────────────────────────────┐
│ ┌────────────────────────────┐   │
│ │ 🔐 System Activation    × │   │
│ ├────────────────────────────┤   │
│ │ 16-Digit Activation Code   │   │
│ │ [XXXX-XXXX-XXXX-XXXX]     │   │
│ │ Example: 1234-5678-9012.. │   │
│ │                            │   │
│ │ [  Cancel  ] [ Activate ] │   │
│ └────────────────────────────┘   │
└──────────────────────────────────┘
```

**Modal Styling**:
- Background: rgba(0, 0, 0, 0.6) with blur
- Content: White, rounded 12px
- Width: 500px (90% on mobile)
- Padding: 40px
- Box-shadow: Large drop shadow
- Animation: Slide up (0.4s)

**Form Elements**:

1. **Header**
   - Title: "🔐 System Activation"
   - Close button: × (top right)
   - Border-bottom: 2px gold

2. **Input Field**
   - Label: "16-Digit Activation Code"
   - Type: Text
   - Maxlength: 19 (including hyphens)
   - Font: Courier New (monospace)
   - Letter-spacing: 2px
   - Focus: Gold border, light shadow

3. **Helper Text**
   - Color: #999
   - Size: 12px
   - Example format displayed

4. **Buttons**

   **Cancel Button**:
   - Background: #F5F5F5 (Light gray)
   - Border: 2px solid #D4AF37 (Gold)
   - Text: Navy blue
   - Hover: Background gold, text white

   **Activate Button**:
   - Background: Gradient navy to dark navy
   - Border: None
   - Text: White
   - Hover: Drop shadow, lift effect

---

### 7. Button Styles

#### Primary Button
```
Style: Gradient background (Navy → Dark Navy)
Border: None
Text: White, Bold
Padding: 12px 24px
Border-radius: 8px
Hover: Drop shadow, translate(-2px)
Active: translate(0)
```

#### Secondary Button
```
Style: Border only
Border: 2px solid #D4AF37 (Gold)
Background: White
Text: Navy blue
Padding: 12px 24px
Border-radius: 8px
Hover: Background gold, text white
```

#### Icon Button
```
Style: Border with background
Border: 1px solid #E0E0E0
Background: White
Icon: Navy blue
Size: 40x40px
Border-radius: 8px
Hover: Background navy, icon gold, scale(1.1)
```

#### Paper Button (Sidebar)
```
Style: Semi-transparent background with border
Background: rgba(212, 175, 55, 0.1)
Border: 1px solid #D4AF37
Text: White, bold, uppercase
Padding: 12px
Border-radius: 6px
Hover: Solid gold background, navy text, translateY(-2px)
```

---

### 8. Color Swatches & Codes

```css
/* Primary Colors */
--primary: #001F3F;           /* Navy Blue */
--secondary: #003D7A;         /* Dark Navy */
--gold: #D4AF37;              /* Metallic Gold */
--gold-dark: #B8860B;         /* Dark Gold */

/* Neutral Colors */
--white: #FFFFFF;             /* Pure White */
--light-gray: #F5F5F5;        /* Light Gray BG */
--dark-gray: #333333;         /* Dark Text */
--border: #E0E0E0;            /* Borders */

/* Effects */
--shadow: 0 4px 20px rgba(0, 31, 63, 0.15);     /* Standard */
--shadow-lg: 0 8px 32px rgba(0, 31, 63, 0.25);  /* Large */
```

---

### 9. Typography Hierarchy

```
Display/Logo
├── Font: Segoe UI
├── Size: 16px
├── Weight: 700 (Bold)
├── Letter-spacing: 2px
└── Color: Gold (#D4AF37)

Heading 1 (Page Title)
├── Size: 18px
├── Weight: 700
├── Color: Primary (#001F3F)
└── Letter-spacing: 1px

Heading 2 (Section)
├── Size: 14px
├── Weight: 600
├── Color: Primary (#001F3F)

Body Text
├── Size: 14px
├── Weight: 400
├── Color: Dark Gray (#333333)
├── Line-height: 1.5

Small Text (Labels)
├── Size: 12px
├── Weight: 600
├── Color: Gold (#D4AF37)
├── Text-transform: Uppercase
└── Letter-spacing: 2px

Code/Monospace
├── Font: Courier New
├── Size: 14px
├── Letter-spacing: 2px
└── Color: Navy (#001F3F)
```

---

### 10. Animation Library

#### Fade In
```css
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
Duration: 0.3s
Timing: ease
```

#### Fade In Up
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
Duration: 0.4s
Timing: ease-out
```

#### Slide In Down
```css
@keyframes slideInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
Duration: 0.8s
Timing: ease-out
```

#### Glow Animation (Wolf Eyes)
```css
@keyframes glow {
    0%, 100% {
        filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.6));
    }
    50% {
        filter: drop-shadow(0 0 15px rgba(212, 175, 55, 0.9));
    }
}
Duration: 2s
Timing: ease-in-out
Repeat: infinite
```

#### Smooth Transitions
```css
Button Hover:
transition: all 0.3s ease;

Border Focus:
transition: border-color 0.3s ease;

Transform Hover:
transition: transform 0.3s ease;
```

---

### 11. Responsive Breakpoints

#### Desktop (> 1024px)
```
Layout: Two-column (Sidebar + Chat)
Sidebar: 320px fixed width
Chat: Flexible width
Font Sizes: Full size (14px+)
Spacing: 30px padding
Message Width: 70%
```

#### Tablet (768px - 1024px)
```
Layout: Two-column (adjusted)
Sidebar: 300px or adjusted
Font Sizes: Slightly reduced (13px)
Spacing: 20px padding
Message Width: 75%
Buttons: Slightly smaller
```

#### Mobile (< 768px)
```
Layout: Stacked (Sidebar below Chat)
Sidebar: Full width, 40vh max-height
Chat: Full width, flexible height
Font Sizes: Reduced (12-13px)
Spacing: 15px padding
Message Width: 85%
Buttons: Touch-friendly (44x44px min)
Header: Compact
Modal: Full width (90%)
```

---

### 12. Accessibility Features

✅ **Color Contrast**
- Navy/White: High contrast (7:1+)
- Gold/White: Good contrast (4.5:1+)
- All text readable

✅ **Focus States**
- All interactive elements have visible focus
- Gold border outline on keyboard navigation
- Focus-visible pseudo-class support

✅ **Semantic HTML**
- Proper heading hierarchy
- Form labels associated with inputs
- Button roles clearly defined
- ARIA attributes where needed

✅ **Keyboard Navigation**
- Tab order logical
- Enter/Space activate buttons
- Shift+Enter for line breaks
- Escape closes modals

✅ **Text Size**
- Minimum 12px for small text
- Line-height: 1.5+ for readability
- Readable Sinhala font support

---

### 13. State Indicators

#### Button States

**Default**:
```css
opacity: 1;
cursor: pointer;
```

**Hover**:
```css
background: [lighter/different color];
box-shadow: drop-shadow;
transform: translateY(-2px);
```

**Focus**:
```css
outline: 2px solid gold;
outline-offset: 2px;
```

**Active/Pressed**:
```css
transform: translateY(0);
box-shadow: inset effect;
```

**Disabled** (if applicable):
```css
opacity: 0.5;
cursor: not-allowed;
```

#### Input States

**Empty**:
```css
border: 1px solid #E0E0E0;
background: white;
```

**Focus**:
```css
border-color: #D4AF37;
box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
```

**Valid**:
```css
border-color: green;
```

**Invalid**:
```css
border-color: red;
box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.1);
```

---

### 14. Scrollbar Styling

```css
::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: #D4AF37;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #B8860B;
}
```

**Result**: Thin, gold-colored scrollbar on navy background

---

### 15. Shadow Hierarchy

```
No Shadow: Elements on top
├── Flat backgrounds
└── Secondary elements

Standard Shadow (--shadow):
├── 0 4px 20px rgba(0, 31, 63, 0.15)
├── Used for: Cards, buttons, messages
└── Depth level: 1

Large Shadow (--shadow-lg):
├── 0 8px 32px rgba(0, 31, 63, 0.25)
├── Used for: Modals, header, prominent elements
└── Depth level: 2

Hover Shadow (on hover):
├── Increased blur and spread
├── Used for: Interactive hover states
└── Creates: Lift effect with animation
```

---

## 🎯 Design Consistency

### Do's ✅
- ✅ Use color palette consistently
- ✅ Maintain 8px spacing grid
- ✅ Use system fonts for performance
- ✅ Apply animations smoothly
- ✅ Test on multiple devices
- ✅ Keep contrast high for accessibility
- ✅ Use semantic HTML
- ✅ Minimize reflow/repaint

### Don'ts ❌
- ❌ Mix multiple border colors
- ❌ Use non-standard colors outside palette
- ❌ Apply too many animations
- ❌ Use decorative images unnecessarily
- ❌ Ignore mobile responsiveness
- ❌ Skip focus states
- ❌ Use inline styles excessively
- ❌ Forget accessibility

---

## 📐 Component Spacing Guide

```
┌─────────────────────────────────┐
│  Header (60px)                  │
├──────────────┬──────────────────┤
│ Sidebar      │ Chat             │
│ (320px)      │ Content:         │
│              │ ┌──────────────┐ │
│ Padding:     │ │ Message      │ │
│ 20px         │ │ Padding: 30px│ │
│              │ │ Gap: 15px    │ │
│              │ └──────────────┘ │
│              │ Input Area:      │
│              │ Padding: 20px 30px
│              │ Gap: 10px        │
├──────────────┴──────────────────┤
│ Footer (auto)                   │
└─────────────────────────────────┘
```

---

**UI Components Complete! 🎨✨**

All components ready for implementation and customization.
