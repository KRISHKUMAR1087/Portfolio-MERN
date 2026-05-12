# 🎨 Customization Guide

Learn how to personalize your MERN portfolio!

## 📝 Content Customization

### Location: `server/data.js`

This file contains ALL your portfolio content. Edit it to customize everything.

### 1. Personal Information

```javascript
personal: {
  name: "Your Name",
  title: "Your Professional Title",
  bio: "Your bio text",
  email: "your.email@example.com",
  profileImage: "/images/your-photo.jpg",
  location: "Your City, Country"
}
```

### 2. About Section

```javascript
about: {
  shortBio: "Your detailed bio...",
  technicalSkills: ["Skill 1", "Skill 2", ...],
  softSkills: ["Leadership", "Communication", ...]
}
```

Add or remove skills by editing the arrays.

### 3. Education

#### School:
```javascript
school: {
  schoolName: "Your School Name",
  results: [
    {
      title: "Class 10th",
      percentage: "90%",
      year: "2022",
      certificate: "path/to/image.jpg"
    }
  ]
}
```

#### College:
```javascript
college: {
  collegeName: "Your College",
  university: "University Name",
  program: "Your Program",
  semesters: [
    {
      number: 1,
      cgpa: "8.5/10",
      certificate: "path/to/cert.jpg"
    }
  ]
}
```

### 4. Add More Sections

To add a new section (e.g., "Experience"):

1. Add data to `server/data.js`:
```javascript
experience: [
  {
    company: "Company Name",
    position: "Position",
    duration: "2024-Present",
    description: "What you did"
  }
]
```

2. Create new component in `client/src/components/Experience.jsx`:
```javascript
export const Experience = ({ data }) => {
  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Your content here */}
      </div>
    </section>
  );
};
```

3. Import and add to `App.jsx`:
```javascript
import { Experience } from './components';

// Inside App component:
<Experience data={data} />
```

## 🎨 Style Customization

### Location: `client/src/styles/global.css`

### 1. Color Scheme

```css
:root {
  --bg: linear-gradient(135deg, #0A0F1F 0%, #111725 50%, #0A0F1F 100%);
  --panel: #111725;
  --text: #E9ECF5;
  --muted: #94A2C2;
  --accent: #6C63FF;        /* Main brand color */
  --accent-2: #4DE2FF;      /* Secondary color */
  --accent-3: #00D9FF;      /* Tertiary color */
}
```

**Quick color changes:**
- **Purple theme** (current): `--accent: #6C63FF`
- **Blue theme**: `--accent: #0066FF`
- **Green theme**: `--accent: #10B981`
- **Pink theme**: `--accent: #EC4899`

### 2. Typography

Change font in `body` selector:
```css
body {
  font-family: 'Poppins', -apple-system, sans-serif;
  /* Other fonts: 'Playfair Display', 'Roboto', 'Raleway' */
}
```

### 3. Spacing & Layout

```css
:root {
  --container: 1200px;  /* Max width of content */
}
```

Adjust section padding:
```css
.section {
  padding: 100px 20px;  /* Change top/bottom padding */
}
```

### 4. Animation Speed

Find animation definitions and change duration:
```css
@keyframes fadeInUp {
  /* Default: 0.8s */
}
```

Change `.8s` to `.3s` for faster or `1.2s` for slower animations.

### 5. Card Styling

```css
.card {
  border-radius: 16px;  /* Adjust corner roundness */
  padding: 24px;        /* Adjust padding */
  backdrop-filter: blur(10px);  /* Adjust blur amount */
}
```

## 🖼️ Image Management

### Adding Images

1. Place images in: `client/public/images/`
2. Reference in `server/data.js`:
```javascript
profileImage: "/images/profile.jpg"
```

### Recommended Image Sizes

- **Profile**: 220x220px (square)
- **Projects**: 400x250px
- **Team members**: 150x150px
- **Certificates**: 400x300px (if showing previews)

### Optimize Images

For faster loading:
- Compress with TinyPNG or ImageOptim
- Use JPEG for photos, PNG for graphics
- Max file size: 500KB

## 🎬 Animation Customization

### In Component JSX

Use Framer Motion variants:

```javascript
const customVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2 }  // Change duration
  }
};

<motion.div variants={customVariants} />
```

### Common Animations

```javascript
// Fade in on scroll
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}

// Slide in from left
initial={{ x: -30, opacity: 0 }}
whileInView={{ x: 0, opacity: 1 }}

// Scale on hover
whileHover={{ scale: 1.1 }}

// Rotate on click
whileTap={{ rotate: 5 }}
```

## 🔗 Social Media Links

Edit in `server/data.js`:

```javascript
social: {
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourprofile",
  instagram: "https://instagram.com/yourprofile",
  twitter: "https://x.com/yourprofile",
  // Add more as needed
}
```

## 🚀 Performance Optimization

### 1. Image Lazy Loading
Already implemented! Images load as they enter viewport.

### 2. Code Splitting
Vite does this automatically.

### 3. CSS Optimization
Unused CSS is removed in production build.

## 📱 Responsive Design

### Breakpoints (in `global.css`)

```css
@media (max-width: 768px) {
  /* Tablet styles */
}

@media (max-width: 480px) {
  /* Mobile styles */
}
```

Test responsiveness:
- Open DevTools (F12)
- Click device toolbar
- Test on iPhone, iPad, Android

## 🔒 Security Tips

- Don't commit `.env` files
- Use environment variables for sensitive data
- Validate form inputs on backend
- Keep dependencies updated: `npm update`

## ✅ Testing Your Changes

1. **Content changes**: Refresh browser (F5)
2. **CSS changes**: Hard refresh (Ctrl+Shift+R)
3. **Component changes**: Restart dev server
4. **Mobile testing**: Use DevTools or local network

## 🎯 Popular Customizations

### Make it More Corporate
- Change colors to blue/gray
- Add professional fonts (Roboto, Inter)
- Increase padding/spacing
- Formal language in bios

### Make it Colorful/Creative
- Use vibrant colors
- Add emoji to section titles
- Increase animation intensity
- Use creative fonts

### Minimize/Clean Look
- Remove animations or reduce them
- Use neutral colors
- Simplify card styling
- Remove non-essential sections

---

Need more help? Check components in `src/components/` for examples!
