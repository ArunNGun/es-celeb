# ES Celebrations - Production Deployment Guide

## Pre-Deployment Checklist

### 1. Environment Setup
- [ ] Copy `.env.example` to `.env.local`
- [ ] Update all environment variables with production values
- [ ] Set `NEXT_PUBLIC_SITE_URL` to your production domain
- [ ] Configure analytics IDs (Google Analytics, GTM) if needed

### 2. Image Optimization
All images are already in WebP format for optimal performance. The site uses:
- Next.js Image component with automatic optimization
- Blur placeholders for smooth loading
- Lazy loading for images below the fold
- Responsive image sizes for different devices

### 3. Performance Optimizations Applied

#### Next.js Configuration (`next.config.ts`)
- ✅ Image optimization with AVIF and WebP formats
- ✅ SWC minification enabled
- ✅ Console removal in production
- ✅ Compression enabled
- ✅ Source maps disabled for faster builds

#### Code Optimizations
- ✅ React.memo and useMemo for expensive computations
- ✅ useCallback for event handlers
- ✅ Infinite scroll for gallery pagination
- ✅ GPU-accelerated animations
- ✅ Smooth scroll behavior

### 4. Build and Test

```bash
# Install dependencies
npm install

# Run production build
npm run build

# Test production build locally
npm start

# Check for build errors
npm run lint
```

### 5. Performance Testing

Before deploying, test your site:
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Test on mobile devices
- [ ] Check Core Web Vitals
- [ ] Verify all images load correctly
- [ ] Test infinite scroll functionality

### 6. Deployment Platforms

#### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### Netlify
```bash
# Build command
npm run build

# Publish directory
.next
```

#### Custom Server
```bash
# Build
npm run build

# Start
npm start
```

## Post-Deployment

### 1. DNS Configuration
- Point your domain to the deployment platform
- Configure SSL certificate (automatic on Vercel/Netlify)
- Set up www redirect if needed

### 2. Monitoring
- Set up error tracking (Sentry, LogRocket)
- Configure uptime monitoring
- Enable analytics

### 3. SEO
- Submit sitemap to Google Search Console
- Verify meta tags and Open Graph images
- Test social media sharing

## Performance Benchmarks

Expected Lighthouse scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## Optimization Features

### Image Loading
- Blur placeholders for smooth loading experience
- Lazy loading for below-the-fold images
- Responsive image sizes
- WebP format with AVIF fallback

### Gallery Performance
- Infinite scroll (12 images per load)
- Masonry layout with CSS columns
- GPU-accelerated animations
- Optimized re-renders with React hooks

### Page Transitions
- Smooth scroll behavior
- CSS transitions for interactive elements
- Reduced motion support for accessibility

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Image Loading Issues
- Verify all images are in `/public/gallery/`
- Check image paths in `services.ts`
- Ensure WebP format compatibility

### Performance Issues
- Check Network tab for large assets
- Verify image optimization is working
- Test on slower connections

## Maintenance

### Regular Updates
```bash
# Update dependencies
npm update

# Check for security issues
npm audit

# Fix security issues
npm audit fix
```

### Content Updates
- Add new images to `/public/gallery/[service-name]/`
- Update `src/data/services.ts` with new image paths
- Rebuild and redeploy

## Support

For issues or questions:
- Check Next.js documentation: https://nextjs.org/docs
- Review this deployment guide
- Contact development team

---

**Last Updated:** 2025-01-27
**Version:** 1.0.0