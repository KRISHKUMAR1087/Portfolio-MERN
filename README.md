# 🚀 Professional MERN Portfolio

A modern, fully animated portfolio built with **MongoDB, Express, React, and Node.js** featuring smooth animations, an animated cursor, and professional design.

## ✨ Features

- **Modern React Frontend** with Framer Motion animations
- **Express.js Backend** with API routes
- **Fully Animated UI** - Smooth transitions and interactive elements
- **Animated Cursor** - Custom cursor with hover effects
- **Responsive Design** - Mobile-first approach
- **Direct Portfolio Load** - No scroll gate, lands directly on portfolio
- **Professional Design** - Modern dark theme with accent colors

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Framer Motion, React Icons
- **Backend**: Node.js, Express, CORS
- **Styling**: Modern CSS3 with animations and glassmorphism
- **Deployment**: Ready for production

## 📋 Prerequisites

- Node.js (v16+)
- npm or yarn

## 🚀 Installation & Setup

### 1. Clone and Install All Dependencies

```bash
cd portfolio-mern
npm run install-all
```

### 2. Start Development Servers

```bash
npm run dev
```

This will start:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

## 📁 Project Structure

```
portfolio-mern/
├── server/                 # Express backend
│   ├── server.js          # Main server file
│   ├── data.js            # Portfolio data
│   └── package.json
├── client/                # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── styles/        # Global styles
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   ├── public/
│   │   └── index.html
│   └── vite.config.js
└── package.json           # Root package.json
```

## 🎨 Components

### Frontend Components

- **Navigation** - Sticky navigation with smooth scrolling
- **Hero** - Landing section with animated profile
- **About** - Professional summary with skills
- **Hobbies** - Personal interests showcase
- **Education** - School and college information
- **Achievements** - Awards and recognitions
- **Projects** - Portfolio projects with links
- **Contact** - Social media and contact links
- **AnimatedCursor** - Custom cursor implementation
- **AnimatedCard** - Reusable card with animations

## 🔧 Customization

### Update Portfolio Data

Edit `server/data.js` to update your portfolio information:

```javascript
export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    // ... other fields
  },
  // ... other sections
};
```

### Modify Styling

Edit `client/src/styles/global.css` for theme colors:

```css
:root {
  --accent: #6C63FF;
  --accent-2: #4DE2FF;
  --accent-3: #00D9FF;
  /* ... other variables */
}
```

## 📸 Add Images

1. Copy images to `client/public/images/`
2. Reference them in `server/data.js`:

```javascript
profileImage: "/images/your-image.jpg"
```

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

### Deploy Frontend (Vercel/Netlify)

```bash
cd client
npm run build
# Deploy the 'dist' folder to Vercel/Netlify
```

### Deploy Backend (Heroku/Railway/Render)

```bash
cd server
# Follow your hosting provider's deployment guide
```

### Environment Variables

Create `.env` files:

**server/.env**
```
PORT=5000
NODE_ENV=production
```

**client/.env** (if needed)
```
VITE_API_URL=https://your-backend-url.com
```

## 🎯 API Routes

- `GET /api/portfolio` - Get all portfolio data
- `GET /api/personal` - Personal info
- `GET /api/about` - About section
- `GET /api/hobbies` - Hobbies list
- `GET /api/school` - School information
- `GET /api/college` - College information
- `GET /api/achievements` - Achievements
- `GET /api/certificates` - Certificates
- `GET /api/courses` - Courses
- `GET /api/team` - Team members
- `GET /api/hackathons` - Hackathon info
- `GET /api/projects` - Projects list
- `GET /api/social` - Social links

## 🎭 Animation Features

- **Scroll Animations** - Elements animate on viewport entry
- **Hover Effects** - Cards lift on hover with shadow changes
- **Entrance Animations** - Staggered component reveals
- **Smooth Transitions** - Cubic-bezier easing for natural motion
- **Custom Cursor** - Follows mouse with interactive feedback

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🤝 Contributing

Feel free to fork this project and customize it for your portfolio!

## 📄 License

MIT License - Feel free to use for personal or commercial projects

## 📞 Support

For issues or questions, please check the documentation or create an issue on GitHub.

---

Built with ❤️ by Darji Krishkumar
