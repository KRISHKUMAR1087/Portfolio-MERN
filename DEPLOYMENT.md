# 🌐 Deployment Guide

Deploy your MERN portfolio to production!

## Option 1: Vercel (Recommended - Free & Easy)

### Frontend Deployment

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. **Connect to Vercel**
- Go to https://vercel.com
- Click "New Project"
- Import your GitHub repository
- In project settings:
  - Root Directory: `client`
  - Build Command: `npm run build`
  - Output Directory: `dist`

3. **Set Environment Variables**
- Add `VITE_API_URL` pointing to your backend

### Backend Deployment (Railway/Render)

**Using Railway (Easiest)**

1. Go to https://railway.app
2. Create new project
3. Select "GitHub repo" or upload source
4. Set environment variables if needed
5. Railway auto-detects Node.js app

## Option 2: Netlify (Frontend)

1. Connect GitHub at https://netlify.com
2. Build settings:
   - Base directory: `client`
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy!

## Option 3: Self-Hosted (VPS/Shared Hosting)

### Prerequisites
- Node.js installed on server
- SSH access to server

### Steps

```bash
# SSH into your server
ssh user@yourserver.com

# Clone repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install
cd server && npm install
cd ../client && npm install && npm run build
cd ..

# Install PM2 for process management
npm install -g pm2

# Start server
pm2 start server/server.js --name "portfolio"

# Setup automatic startup
pm2 startup
pm2 save
```

### Reverse Proxy Setup (Nginx)

Create `/etc/nginx/sites-available/portfolio`:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

### SSL Certificate (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d yourdomain.com
```

## Option 4: Docker Deployment

### Create Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy root package.json
COPY package*.json ./

# Install root dependencies
RUN npm install

# Copy server
COPY server ./server
RUN cd server && npm install

# Copy client and build
COPY client ./client
RUN cd client && npm install && npm run build

EXPOSE 5000

CMD ["node", "server/server.js"]
```

### Build and Run

```bash
docker build -t portfolio:latest .
docker run -p 5000:5000 portfolio:latest
```

## Environment Variables

Create `.env` files on your server:

**Production `.env`**
```
NODE_ENV=production
PORT=5000
# Add any other needed variables
```

## Database (Optional MongoDB)

If adding database later:

```javascript
// In server/server.js
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
```

## SSL/HTTPS Setup

### Vercel/Netlify
- Automatic HTTPS ✓

### Self-hosted
```bash
# Using certbot
sudo certbot certonly --standalone -d yourdomain.com
```

Update nginx config for HTTPS.

## Monitoring & Logging

### PM2 Monitoring
```bash
pm2 monit              # Real-time monitoring
pm2 logs               # View logs
pm2 logs --err         # Error logs
```

### Cloudflare Setup

1. Add domain to Cloudflare
2. Update nameservers at registrar
3. Enable caching in Cloudflare dashboard

## Performance Optimization

### CDN (Cloudflare/Cloudfront)
- Serves static assets from edge locations
- Automatic caching
- DDoS protection

### Compression
```bash
# Enable gzip in nginx
gzip on;
gzip_types text/plain text/css application/json;
```

### Caching Headers
```nginx
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

## Backup Strategy

```bash
# Weekly backups
0 0 * * 0 tar -czf ~/backups/portfolio-$(date +\%Y\%m\%d).tar.gz /home/user/portfolio/
```

## Monitoring & Uptime

Use services like:
- **UptimeRobot** (free) - Monitor website uptime
- **Sentry** - Error tracking
- **New Relic** - Performance monitoring

## Post-Deployment Checklist

- [ ] Domain points to server
- [ ] SSL certificate working
- [ ] API routes responding
- [ ] Images loading correctly
- [ ] Mobile responsive working
- [ ] Analytics tracking set up
- [ ] Email notifications configured
- [ ] Auto-renewal for SSL setup

## Troubleshooting Deployment

### 502 Bad Gateway
```bash
pm2 logs  # Check server logs
```

### Images not loading
- Check paths in data.js
- Verify files in client/public/images/

### Slow performance
- Enable caching
- Compress images
- Use CDN

### Database connection errors
- Verify connection string
- Check network access rules

## Scaling (When Needed)

As your portfolio grows:
- Use database instead of data.js
- Add caching layer (Redis)
- Use load balancer (Nginx)
- Split into microservices

## Cost Estimates (Per Month)

- **Vercel**: Free → $20 (pro)
- **Railway**: Free → $5+
- **Netlify**: Free → $19 (pro)
- **AWS EC2**: $5-20
- **Self-hosted VPS**: $2.50-10

---

Questions? Check your hosting provider's documentation!
