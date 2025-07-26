# Deployment Guide for SoftUp Agency Website

This guide covers deploying the SoftUp Agency website to various platforms.

## 🚀 Quick Deploy Options

### Vercel (Recommended)
Vercel is the easiest option since it's made by the Next.js team:

1. **Connect GitHub Repository**
   ```bash
   # Push your code to GitHub first
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy with Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Environment Variables**
   - Add environment variables in Vercel dashboard
   - Copy from `.env.local.example`

### Netlify
1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Environment Variables**: Add in Netlify dashboard

### AWS Amplify
1. Connect GitHub repository
2. Build settings are auto-detected
3. Add environment variables in Amplify console

## 🔧 Manual Deployment

### Build for Production
```bash
npm run build
npm start
```

### Static Export (if needed)
Add to `next.config.ts`:
```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

Then build:
```bash
npm run build
```

## 🌐 Domain Setup

### Custom Domain
1. **Purchase Domain**: Buy from registrar (Namecheap, GoDaddy, etc.)
2. **DNS Configuration**:
   ```
   Type: CNAME
   Name: www
   Value: your-vercel-domain.vercel.app
   
   Type: A
   Name: @
   Value: 76.76.19.61 (Vercel IP)
   ```

### SSL Certificate
- Automatic with Vercel/Netlify
- Manual: Use Let's Encrypt for free SSL

## 📊 Performance Optimization

### Before Deployment
1. **Optimize Images**: Use WebP format
2. **Minify Assets**: Automatic with Next.js
3. **Enable Compression**: Gzip/Brotli
4. **CDN Setup**: Automatic with Vercel

### Lighthouse Checks
Run before deployment:
```bash
npm install -g lighthouse
lighthouse http://localhost:3000 --view
```

## 🔒 Security Headers

Add to `next.config.ts`:
```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  }
}
```

## 📈 Analytics Setup

### Google Analytics
1. Get GA4 tracking ID
2. Add to environment variables:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### Vercel Analytics
```bash
npm install @vercel/analytics
```

Add to layout:
```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 🚨 Pre-Deployment Checklist

- [ ] All components render without errors
- [ ] Build completes successfully (`npm run build`)
- [ ] All images optimized
- [ ] Environment variables configured
- [ ] SEO meta tags complete
- [ ] robots.txt and sitemap.xml added
- [ ] Favicon and PWA icons added
- [ ] Contact form working
- [ ] Mobile responsive design tested
- [ ] Cross-browser compatibility checked
- [ ] Performance score > 90 (Lighthouse)
- [ ] Security headers configured

## 🔄 CI/CD Pipeline

### GitHub Actions Example
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📱 PWA Setup

The manifest.json is already configured. To enable full PWA:

1. **Service Worker**: Add to `public/sw.js`
2. **Install Prompt**: Add install button
3. **Offline Support**: Cache critical resources

## 🔍 Monitoring

### Error Tracking
- Sentry for error monitoring
- Vercel Analytics for performance
- Google Search Console for SEO

### Performance Monitoring
- Core Web Vitals
- Lighthouse CI
- Real User Monitoring (RUM)

## 📞 Support

For deployment issues:
- Check build logs
- Verify environment variables
- Test locally first
- Contact hosting provider support

---

**Ready to deploy your SoftUp Agency website!** 🚀