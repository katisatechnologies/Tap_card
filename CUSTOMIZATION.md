# 📋 CUSTOMIZATION GUIDE

Quick guide to customize TapShare for your brand.

## 🎨 Branding

### Change Company Name
Search and replace "TapShare" in:
- All component files
- `app/layout.tsx`
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `README.md`

### Update Colors
Edit `tailwind.config.ts`:
```ts
colors: {
  primary: '#0066FF',    // Your brand color
  secondary: '#00D4FF',  // Accent color
  dark: '#0A0E27',       // Dark text
  light: '#F8FAFC',      // Light background
}
```

### Add Logo
Replace text logo in `components/Navbar.tsx`:
```tsx
<img src="/logo.png" alt="TapShare" className="h-8" />
```

---

## 📞 Contact Information

### WhatsApp Number
Find and replace `94771234567` with your number in:
- `components/Navbar.tsx` (line ~24)
- `components/FinalCTA.tsx` (line ~14)
- `components/FAQ.tsx` (line ~80)

### Email & Address
Update in `components/Footer.tsx`:
```tsx
<li>WhatsApp: +94 77 XXX XXXX</li>
<li>Email: hello@yoursite.lk</li>
<li>Your City, Sri Lanka</li>
```

---

## 💰 Pricing

Edit `components/Pricing.tsx`:
```tsx
{
  name: "Your Plan",
  price: "LKR X,XXX",
  description: "Your description",
  features: [
    "Feature 1",
    "Feature 2",
  ]
}
```

---

## 📝 Content

### Hero Section
Edit `components/Hero.tsx`:
- Headline (line 5)
- Subheadline (line 8)
- Button text (line 13-14)

### Use Cases
Edit `components/UseCases.tsx`:
- Add/remove use cases
- Change descriptions
- Update emojis/icons

### FAQ
Edit `components/FAQ.tsx`:
- Add/remove questions
- Update answers

---

## 🖼️ Images

### Add Product Images
1. Create `public/images/` folder
2. Add your images
3. Update components:

```tsx
<img 
  src="/images/card.png" 
  alt="TapShare Card"
  className="w-full h-auto"
/>
```

### Optimize Images
- Use WebP format
- Max width: 2000px
- Compress: <200KB per image
- Use Next.js Image component:

```tsx
import Image from 'next/image'

<Image 
  src="/images/card.png"
  width={800}
  height={500}
  alt="Card"
/>
```

---

## 📊 Analytics

### Google Analytics
1. Get tracking ID from Google Analytics
2. Add to `app/layout.tsx`:

```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### Facebook Pixel
Add to `app/layout.tsx`:
```tsx
<Script id="facebook-pixel" strategy="afterInteractive">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'YOUR_PIXEL_ID');
    fbq('track', 'PageView');
  `}
</Script>
```

---

## 🎯 SEO

### Meta Tags
Edit `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: 'Your Title | Tagline',
  description: 'Your description (150-160 chars)',
  keywords: 'keyword1, keyword2, keyword3',
  openGraph: {
    title: 'Your Title',
    description: 'Your description',
    images: ['/og-image.jpg'],
  },
}
```

### Add Sitemap
Create `app/sitemap.ts`:
```tsx
export default function sitemap() {
  return [
    {
      url: 'https://yoursite.lk',
      lastModified: new Date(),
    },
  ]
}
```

---

## 🔗 Social Links

Edit `components/Footer.tsx`:
```tsx
<a href="https://facebook.com/yourpage">
  {/* Facebook icon */}
</a>
<a href="https://instagram.com/yourpage">
  {/* Instagram icon */}
</a>
```

---

## ✨ Advanced

### Add Contact Form
Install form library:
```bash
npm install react-hook-form
```

Create `components/ContactForm.tsx`:
```tsx
'use client'
import { useForm } from 'react-hook-form'

export default function ContactForm() {
  const { register, handleSubmit } = useForm()
  
  const onSubmit = async (data) => {
    // Send to your backend
    console.log(data)
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Name" />
      <input {...register('email')} placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  )
}
```

### Add Animation
Install Framer Motion:
```bash
npm install framer-motion
```

Use in components:
```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

---

## 📱 Testing

### Mobile Testing
- Chrome DevTools (F12 → Toggle device toolbar)
- Real devices (iPhone, Android)
- [BrowserStack](https://browserstack.com) for multiple devices

### Speed Testing
- [PageSpeed Insights](https://pagespeed.web.dev)
- [GTmetrix](https://gtmetrix.com)
- Aim for 90+ score

---

## 🆘 Common Issues

### Styling Not Working
```bash
# Restart dev server
npm run dev
```

### Build Errors
```bash
# Clear cache
rm -rf .next
npm run build
```

### Type Errors
```bash
# Check types
npx tsc --noEmit
```

---

**Need help?** Check the main [README.md](README.md) or create an issue.
