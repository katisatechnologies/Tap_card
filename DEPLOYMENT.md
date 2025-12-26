# 🚀 DEPLOYMENT GUIDE

## Prerequisites
- Node.js 18+ installed
- npm or yarn installed
- Git installed

## Option 1: Deploy to Vercel (Easiest - Recommended)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial TapShare website"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js - no config needed
6. Click "Deploy"
7. Done! Your site is live in 2 minutes

### Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

---

## Option 2: Deploy to Netlify

### Step 1: Build Settings
- Build command: `npm run build`
- Publish directory: `.next`

### Step 2: Deploy
1. Go to [netlify.com](https://netlify.com)
2. "Add new site" → "Import from Git"
3. Connect GitHub repo
4. Use build settings above
5. Deploy

---

## Option 3: Traditional Hosting (cPanel/Shared)

### Build Locally
```bash
npm run build
npm start
```

### For Static Export (if needed)
Add to `next.config.js`:
```js
module.exports = {
  output: 'export',
  images: {
    unoptimized: true
  }
}
```

Then build:
```bash
npm run build
```

Upload the `out/` folder to your hosting.

---

## Environment Setup (If Needed)

Create `.env.local` for environment variables:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=94771234567
NEXT_PUBLIC_SITE_URL=https://tapshare.lk
```

---

## Post-Deployment Checklist

### ✅ Immediate
- [ ] Test all links
- [ ] Verify WhatsApp number works
- [ ] Test on mobile devices
- [ ] Check loading speed

### ✅ Within 24 Hours
- [ ] Set up Google Analytics
- [ ] Submit sitemap to Google Search Console
- [ ] Add favicon
- [ ] Test contact forms

### ✅ Within Week
- [ ] Add real testimonials
- [ ] Upload actual product photos
- [ ] Configure email notifications
- [ ] Set up Facebook Pixel

---

## Performance Optimization

### After Launch
1. **Images**: Use WebP format, compress to <200KB
2. **Caching**: Enable in Vercel/Netlify settings
3. **CDN**: Automatic with Vercel/Netlify
4. **Monitoring**: Use Vercel Analytics or Google PageSpeed

### Target Metrics
- Lighthouse Score: 90+
- First Contentful Paint: <1.5s
- Time to Interactive: <3.5s

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
npm run dev
```

### TypeScript Errors
```bash
# Check for errors
npm run lint
```

---

## Security

### Before Going Live
- [ ] Remove any test/dummy data
- [ ] Update privacy policy
- [ ] Add HTTPS (automatic with Vercel/Netlify)
- [ ] Enable security headers
- [ ] Test all forms for spam protection

---

## Maintenance

### Regular Updates
```bash
# Update dependencies monthly
npm update
npm audit fix
```

### Backup
- Vercel/Netlify auto-backup every deployment
- Keep local Git repository synced

---

## Support Resources

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind Docs**: [tailwindcss.com/docs](https://tailwindcss.com/docs)

---

**Your website is production-ready!** 🎉

Just update the WhatsApp number and deploy.
