# 🚀 Quick Start Guide

Get your MERN portfolio running in 5 minutes!

## Step 1: Install Dependencies

Open terminal in the `portfolio-mern` directory and run:

```bash
npm run install-all
```

This installs dependencies for server, client, and root.

## Step 2: Start Development

```bash
npm run dev
```

You'll see output like:
```
✨ Portfolio server running on http://localhost:5000
VITE v5.0.0 running at: http://localhost:3000
```

## Step 3: Open in Browser

Go to: **http://localhost:3000**

You should see your portfolio with:
- ✅ Animated hero section
- ✅ Smooth scrolling navigation
- ✅ Animated cursor
- ✅ All your content loaded

## 📸 Adding Your Images

1. Place your images in: `client/public/images/`
2. Update the path in `server/data.js`:
   ```javascript
   profileImage: "/images/your-image.jpg"
   ```

## ✏️ Editing Content

All portfolio content is in: `server/data.js`

Quick edits:
- **Name**: `personal.name`
- **Title**: `personal.title`
- **Bio**: `personal.bio`
- **Skills**: `about.technicalSkills`
- **Projects**: `projects` array

## 🎨 Customizing Colors

Edit `client/src/styles/global.css`:

```css
:root {
  --accent: #6C63FF;      /* Main purple */
  --accent-2: #4DE2FF;    /* Cyan */
  --accent-3: #00D9FF;    /* Light cyan */
}
```

## 🚀 Building for Production

```bash
npm run build
```

This creates an optimized build in `client/dist/`

## 📝 Troubleshooting

### Port already in use?

**For frontend** (port 3000):
```bash
cd client && npm run dev -- --port 3001
```

**For backend** (port 5000):
```bash
cd server && PORT=5001 npm start
```

### Blank page loading?

1. Check console for errors (F12)
2. Verify backend is running (http://localhost:5000/api/portfolio)
3. Clear browser cache

### Images not showing?

1. Check file path in `server/data.js`
2. Verify image files exist in `client/public/images/`
3. Use `/images/filename.jpg` format

## 🎯 Next Steps

1. **Customize your data** in `server/data.js`
2. **Update colors** in `client/src/styles/global.css`
3. **Add your images** to `client/public/images/`
4. **Test all sections** on mobile (use DevTools)
5. **Deploy!** See README.md for deployment guides

## 📱 Testing on Mobile

```bash
# Find your local IP (e.g., 192.168.x.x)
npm run dev

# On phone, visit: http://192.168.x.x:3000
```

## 💡 Pro Tips

- Use `Ctrl+Shift+R` for hard refresh if changes don't show
- Edit colors to match your brand
- Add social media links in `social` object
- Customize fonts by editing `global.css`
- Add more sections by creating new components in `src/components/`

## 🆘 Need Help?

1. Check the main README.md
2. Look at component examples in `src/components/`
3. Verify all dependencies installed with `npm list`
4. Check browser console for error messages

---

Happy coding! 🎉
