# ES Celebrations Website - Master Implementation Plan

## Project Overview
Building an ES Celebrations website inspired by Easton Events, using **Next.js 15** with **CSS Modules** (no Tailwind CSS).

---

## 1. Site Structure & Navigation

### Navigation Items
- Home
- About Us
- Services
- Portfolio / Our Celebrations
- Approach / Philosophy
- Media / Press / Gallery
- Contact

### Logo
- **Location**: ESC > ESC Brand Assets > ESC Logo > EScelebrations_Logo_Golden
- **Placement**: Floating on the left or standard header (to be determined with screenshots)

---

## 2. Content Documentation Structure

### Documentation Files (in `/plan` folder)
- `00-master-plan.md` - This file - overall architecture and plan
- `01-site-structure.md` - Navigation, site map, and overall structure
- `02-home-page.md` - All home page sections with content and image references
- `03-about-page.md` - Story, team bios, values, achievements
- `04-services-page.md` - All service offerings with descriptions
- `05-portfolio-page.md` - Gallery organization and featured celebrations
- `06-approach-page.md` - Philosophy, process steps, thematic galleries
- `07-media-page.md` - Press coverage, achievements, media gallery
- `08-contact-page.md` - Contact details, form fields, location
- `09-component-architecture.md` - All reusable components needed
- `10-css-modules-structure.md` - Styling organization and naming conventions
- `11-image-references.md` - Complete image path mapping

---

## 3. Component Architecture

### Layout Components
- **Header** - Navigation with logo (floating left option)
- **Footer** - Links, social media, contact info
- **Container** - Max-width wrapper for content sections
- **Section** - Reusable section wrapper with spacing

### UI Components
- **Hero** - Full-width banner with image/slideshow, headline, CTA
- **ServiceCard** - Service display with image, title, description
- **PortfolioCard** - Celebration showcase with image, title, tagline
- **TeamMemberCard** - Team member with photo, name, title, bio
- **ProcessStep** - Step-by-step process visualization
- **AchievementBadge** - Award/achievement display
- **ThemeGallery** - Themed photo gallery grid
- **ContactForm** - Form with validation
- **Button** - Primary, secondary, and CTA variants
- **ImageSlider** - Hero carousel/slideshow
- **VideoPlayer** - Embedded video player for highlights

### Feature Components
- **ValueProposition** - Bullet points with icons
- **StatsCounter** - Animated statistics/achievements
- **TestimonialCard** - Client testimonials (if needed later)
- **SocialLinks** - Instagram, LinkedIn icons

---

## 4. CSS Modules Organization

```
src/
├── app/
│   ├── globals.css (base styles, CSS variables, resets)
│   ├── page.module.css (home page specific)
│   ├── about/
│   │   └── about.module.css
│   ├── services/
│   │   └── services.module.css
│   ├── portfolio/
│   │   └── portfolio.module.css
│   ├── approach/
│   │   └── approach.module.css
│   ├── media/
│   │   └── media.module.css
│   └── contact/
│       └── contact.module.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Header.module.css
│   │   ├── Footer.tsx
│   │   ├── Footer.module.css
│   │   ├── Container.tsx
│   │   └── Container.module.css
│   ├── hero/
│   │   ├── Hero.tsx
│   │   └── Hero.module.css
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Button.module.css
│   │   ├── ServiceCard.tsx
│   │   ├── ServiceCard.module.css
│   │   ├── PortfolioCard.tsx
│   │   ├── PortfolioCard.module.css
│   │   └── ... (other UI components)
```

---

## 5. CSS Variables Strategy

### Brand Colors
```css
:root {
  /* Brand Colors */
  --color-primary: #D4AF37; /* Golden */
  --color-secondary: #1a1a1a;
  --color-accent: #f5f5f5;
  --color-white: #ffffff;
  --color-black: #000000;
  
  /* Typography */
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Montserrat', sans-serif;
  
  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 4rem;
  --spacing-xl: 6rem;
  
  /* Layout */
  --max-width: 1200px;
  --border-radius: 8px;
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
}
```

---

## 6. Image Organization

### Current Structure in `/public/gallery/`
- `/baby-showers/`
- `/featured/`
- `/milestones/`
- `/social/`
- `/themes/`
  - `/blue-haldi/`
  - `/carnival/`
  - `/neon/`
  - `/pastel/`
- `/weddings/`

### Additional Assets
- `/public/assets/` - Logo, icons, brand assets

---

## 7. Page-by-Page Implementation Order

### Phase 1: Foundation
1. Update `globals.css` with brand colors and variables
2. Create layout components (Header, Footer, Container)
3. Set up navigation structure

### Phase 2: Home Page (Priority 1)
- Hero section with image slider
- Value proposition section
- Services snapshot (4 cards)
- Featured celebrations (3-5 items)
- Achievements section
- CTA section

### Phase 3: Content Pages (Build one at a time with screenshots)
1. **About Us** - Team showcase, story, values
2. **Services** - Detailed service offerings
3. **Portfolio** - Gallery with filtering
4. **Approach** - Process steps, philosophy
5. **Media** - Press coverage, achievements
6. **Contact** - Form and details

---

## 8. Development Approach

### Technical Standards
- **Mobile-first responsive design**
- **CSS Grid and Flexbox** for layouts
- **CSS Modules** for component-scoped styling
- **Semantic HTML** for accessibility
- **Next.js Image component** for optimized images
- **Smooth animations** with CSS transitions
- **TypeScript** for type safety

### Best Practices
- Component reusability
- Consistent naming conventions
- Modular CSS architecture
- Performance optimization
- SEO-friendly structure

---

## 9. Contact Information

### Business Details
- **Office Address**: Sf-114, Omkar-2, Station Rd, beside Lords Plaza, GIDC, Ankleshwar GIDC, Ankleshwar, Gujarat 393002
- **Phone**: 99250 44514
- **Email**: Hello@entertainmentsportz.com
- **LinkedIn**: [To be linked]
- **Instagram**: [To be linked]

---

## 10. Next Steps

1. ✅ Create master plan document
2. ⏳ Create individual content documentation files
3. ⏳ Create component architecture document
4. ⏳ Create CSS modules structure guide
5. ⏳ Create image reference mapping
6. ⏳ Start building foundation (globals.css, layout components)
7. ⏳ Build Home page (with screenshots for reference)
8. ⏳ Build remaining pages one by one

---

## Notes
- Wait for Easton Events screenshots for navigation style reference
- Build pages iteratively with user feedback
- Ensure all images are properly referenced from existing gallery structure
