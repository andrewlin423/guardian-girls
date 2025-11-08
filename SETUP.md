# Guardian Girls - Setup & Deployment Guide

## Overview

A modern, one-page website built with Astro, React, and shadcn/ui for Lissy's private Brazilian Jiu-Jitsu and self-defense classes for girls.

## Features

- Single-scroll page with smooth anchor navigation
- Sections: Hero, About Instructor, Skills, Gallery, FAQ, Testimonials, Contact
- Purple (#6143A5) and black color scheme
- Responsive design with mobile-first approach
- Interactive components (FAQ accordion, testimonial carousel, contact modal)
- Built with Astro for maximum performance
- React islands for interactive elements
- Tailwind CSS for styling
- shadcn/ui components for UI elements

## Tech Stack

- **Astro** - Core framework
- **React** - Interactive components
- **Tailwind CSS v4** - Styling
- **shadcn/ui** - UI component library
- **TypeScript** - Type safety
- **Resend** - Email API (to be configured)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server will run at http://localhost:4321

## Image Placeholders

The site currently uses text placeholders for images. Replace these with actual images:

- **Img1**: Hero background (Lissy teaching BJJ to girls) - Full bleed, high resolution
- **Img2**: About section (Lissy in gi, professional photo) - Portrait orientation
- **Img3**: Escape techniques demonstration
- **Img4**: Ground fighting position
- **Img5**: Submission hold demonstration
- **Img6**: Situational awareness training
- **Img7**: Striking practice
- **Img8**: Confident student stance
- **Img9-16**: Gallery images (various training shots)

To add images, place them in the `public/` folder and update the image references in the components.

## Content Customization

All content is filled with humorous placeholder text. Update the following files:

### Main Content
- **Hero**: `src/components/Hero.astro` - Main headline and CTA
- **About**: `src/components/About.astro` - Lissy's bio and credentials
- **Skills**: `src/components/KidsLearn.astro` - Training program details
- **Gallery**: `src/components/Gallery.astro` - Training photos
- **FAQ**: `src/components/FAQIsland.tsx` - Common questions
- **Testimonials**: `src/components/TestimonialsIsland.tsx` - Student reviews
- **Footer**: `src/components/Footer.astro` - Contact info, social media links

### Contact Information
Update in `src/components/Footer.astro`:
- Address
- Email (lissy@guardiangirls.com)
- Phone number
- Social media links

## Email Configuration (TODO)

The contact form currently logs submissions to the console. To enable email functionality:

1. **Get a Resend API key**
   - Sign up at https://resend.com
   - Create an API key

2. **Add environment variables**

   For local development, create a `.env` file:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   CONTACT_TO_EMAIL=lissy@guardiangirls.com
   ```

   For Vercel deployment:
   - Go to Project Settings > Environment Variables
   - Add `RESEND_API_KEY`
   - Add `CONTACT_TO_EMAIL`

3. **Update the API endpoint**
   - Open `src/pages/api/contact.ts`
   - Uncomment the Resend email code (marked with TODO)
   - Remove the console.log placeholder code

## Deployment to Vercel

### Prerequisites
- GitHub account
- Vercel account (free tier works fine)

### Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Astro settings

3. **Configure Environment Variables**
   - In Vercel project settings
   - Go to "Environment Variables"
   - Add `RESEND_API_KEY` (when ready)
   - Add `CONTACT_TO_EMAIL` (when ready)

4. **Deploy!**
   - Click "Deploy"
   - Your site will be live in ~2 minutes

### Custom Domain (Optional)
- In Vercel project settings
- Go to "Domains"
- Add your custom domain (e.g., guardiangirls.com)
- Follow DNS configuration instructions

## Color Theme

The site uses a purple and black color scheme:

- **Primary Purple**: `#6143A5`
- **Dark Purple**: `#4A3380`
- **Light Purple**: `#7D5BC7`
- **Black, White, and Gray variations** from Tailwind's palette

To change colors, update `src/styles/global.css`:

```css
@theme {
  --color-guardian-purple: #6143a5;
  --color-guardian-purple-dark: #4a3380;
  --color-guardian-purple-light: #7d5bc7;
}
```

## Accessibility

The site includes:
- Semantic HTML
- ARIA labels for icons and interactive elements
- Keyboard navigation support
- Focus indicators
- Smooth scroll behavior
- Mobile-responsive design

## Performance

Built with Astro for optimal performance:
- Static site generation (SSG)
- Minimal JavaScript (only for interactive components)
- Optimized images (when you add them)
- Fast page loads
- Great Lighthouse scores

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf node_modules .astro dist
npm install
npm run build
```

### Dev Server Issues
```bash
# Kill any processes on port 4321
lsof -ti:4321 | xargs kill -9
npm run dev
```

### TypeScript Errors
The project uses strict TypeScript. If you see errors:
- Check import paths
- Ensure all props are typed
- Run `npm run astro check`

## License

Built with sarcasm and love for Guardian Girls by Lissy.

---

**Questions?** Check the main README.md or Astro documentation at https://docs.astro.build
