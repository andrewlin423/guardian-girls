# Guardian Girls - Image Reference Guide

This document lists all image placeholders in the website and their requirements.

## Image Placeholders

### Hero Section
**Location**: `src/components/Hero.astro`

- **[Img1: Hero - Lissy teaching girl students BJJ]**
  - **Type**: Hero background image
  - **Dimensions**: 1920x1080px minimum (landscape)
  - **Format**: JPG or WebP
  - **Content**: Action shot of Lissy teaching BJJ to girls, preferably on mats
  - **Notes**: Will have dark overlay, so image should be bright and high-contrast

---

### About Section
**Location**: `src/components/About.astro`

- **[Img2: Lissy in gi, looking badass]**
  - **Type**: Portrait photo
  - **Dimensions**: 800x1000px (3:4 aspect ratio)
  - **Format**: JPG or WebP
  - **Content**: Professional photo of Lissy in her gi, showing black belt
  - **Notes**: Should look confident and professional but approachable

---

### Skills Cards
**Location**: `src/components/KidsLearn.astro`

- **[Img3: Escape technique demo]**
  - **Dimensions**: 800x450px (16:9 aspect ratio)
  - **Content**: Demonstration of escape technique from hold/grab

- **[Img4: Ground fighting position]**
  - **Dimensions**: 800x450px (16:9 aspect ratio)
  - **Content**: Ground defense position or technique

- **[Img5: Submission hold]**
  - **Dimensions**: 800x450px (16:9 aspect ratio)
  - **Content**: Control technique or submission (choke/arm bar)

- **[Img6: Awareness training]**
  - **Dimensions**: 800x450px (16:9 aspect ratio)
  - **Content**: Situational awareness training or discussion

- **[Img7: Striking practice]**
  - **Dimensions**: 800x450px (16:9 aspect ratio)
  - **Content**: Student practicing strikes on pads or bag

- **[Img8: Confident stance]**
  - **Dimensions**: 800x450px (16:9 aspect ratio)
  - **Content**: Student in confident, ready stance

---

### Gallery Section
**Location**: `src/components/Gallery.astro`

- **[Img9: Training session]**
  - **Dimensions**: 600x600px (square)
  - **Content**: General training session

- **[Img10: Technique demo]**
  - **Dimensions**: 600x1200px (tall/portrait)
  - **Content**: Vertical shot of technique demonstration

- **[Img11: Group class]**
  - **Dimensions**: 600x600px (square)
  - **Content**: Multiple students training together

- **[Img12: Mat work wide shot]**
  - **Dimensions**: 1200x600px (wide/landscape)
  - **Content**: Wide angle shot of mat work

- **[Img13: Lissy teaching]**
  - **Dimensions**: 600x600px (square)
  - **Content**: Lissy instructing a student

- **[Img14: Student success]**
  - **Dimensions**: 600x600px (square)
  - **Content**: Student achievement moment (belt promotion, successful technique)

- **[Img15: Sparring session]**
  - **Dimensions**: 1200x600px (wide/landscape)
  - **Content**: Controlled sparring or drilling

- **[Img16: Belt promotion]**
  - **Dimensions**: 600x600px (square)
  - **Content**: Belt promotion or achievement celebration

---

## How to Add Images

### Option 1: Direct Replacement

1. Place images in the `public/images/` folder
2. Update component files to use actual image paths:

```astro
<!-- Before -->
<div class="bg-gray-800">
  [Img1: Hero - Lissy teaching girl students BJJ]
</div>

<!-- After -->
<img
  src="/images/hero-bg.jpg"
  alt="Lissy teaching BJJ to girl students"
  class="w-full h-full object-cover"
/>
```

### Option 2: Using Astro's Image Component (Recommended)

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero-bg.jpg';
---

<Image
  src={heroImage}
  alt="Lissy teaching BJJ to girl students"
  class="w-full h-full object-cover"
  loading="eager"
/>
```

## Image Optimization Tips

1. **Compress images** before uploading (use TinyPNG or similar)
2. **Use WebP format** for better compression
3. **Provide alt text** for accessibility
4. **Use appropriate dimensions** - don't upload 5000px images for 600px displays
5. **Lazy load** gallery images (except hero)

## Photography Guidelines

When taking new photos:

- **Good lighting**: Natural light or well-lit gym
- **Action shots**: Show movement and technique
- **Multiple angles**: Close-ups and wide shots
- **Authentic moments**: Real training, not staged poses
- **Get permission**: Written consent from students/parents
- **High resolution**: Minimum 1920px on longest side for hero
- **Clean background**: Avoid clutter, focus on training

## Stock Photo Alternative (Temporary)

If you need temporary placeholders while waiting for real photos, consider:

- **Unsplash**: Free high-quality photos (search "martial arts", "jiu jitsu")
- **Pexels**: Free stock photos
- **Creative Commons**: Check license requirements

**Note**: Replace with real photos before launch for authenticity!

---

## Favicon

Don't forget to update the favicon:
- Location: `public/favicon.svg`
- Create a simple logo or icon representing Guardian Girls
- Should work at 32x32px and 512x512px

---

**Need help?** Check SETUP.md for full setup instructions.
