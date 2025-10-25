# Component Architecture - ES Celebrations Website

## Overview
This document outlines all reusable components needed for the ES Celebrations website, organized by category.

---

## 1. Layout Components

### Header Component
**File:** `src/components/layout/Header.tsx` + `Header.module.css`

**Purpose:** Main navigation header with logo and menu

**Props:**
- `variant?: 'floating' | 'standard'` - Navigation style
- `transparent?: boolean` - Transparent background on scroll

**Features:**
- Logo (ESC golden logo)
- Navigation menu (Home, About, Services, Portfolio, Approach, Media, Contact)
- Mobile hamburger menu
- Sticky/fixed positioning
- Scroll-based transparency change
- Active link highlighting

**CSS Modules:**
```css
.header { }
.headerFloating { }
.headerStandard { }
.logo { }
.nav { }
.navList { }
.navItem { }
.navLink { }
.navLinkActive { }
.mobileMenuButton { }
.mobileMenu { }
```

---

### Footer Component
**File:** `src/components/layout/Footer.tsx` + `Footer.module.css`

**Purpose:** Site footer with links and contact info

**Props:** None

**Features:**
- Quick links (navigation)
- Contact information
- Social media links
- Copyright notice
- Newsletter signup (optional)

**CSS Modules:**
```css
.footer { }
.footerContent { }
.footerSection { }
.footerLinks { }
.socialLinks { }
.copyright { }
```

---

### Container Component
**File:** `src/components/layout/Container.tsx` + `Container.module.css`

**Purpose:** Max-width wrapper for content sections

**Props:**
- `maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full'`
- `padding?: boolean`
- `children: ReactNode`

**CSS Modules:**
```css
.container { }
.containerSm { }
.containerMd { }
.containerLg { }
.containerXl { }
.containerFull { }
.withPadding { }
```

---

### Section Component
**File:** `src/components/layout/Section.tsx` + `Section.module.css`

**Purpose:** Reusable section wrapper with consistent spacing

**Props:**
- `id?: string`
- `background?: 'white' | 'gray' | 'dark' | 'gradient'`
- `padding?: 'sm' | 'md' | 'lg' | 'xl'`
- `children: ReactNode`

**CSS Modules:**
```css
.section { }
.backgroundWhite { }
.backgroundGray { }
.backgroundDark { }
.backgroundGradient { }
.paddingSm { }
.paddingMd { }
.paddingLg { }
.paddingXl { }
```

---

## 2. Hero Components

### Hero Component
**File:** `src/components/hero/Hero.tsx` + `Hero.module.css`

**Purpose:** Full-width hero banner with image/video background

**Props:**
- `title: string`
- `subtitle?: string`
- `backgroundImage?: string`
- `backgroundVideo?: string`
- `overlay?: boolean`
- `ctaButtons?: Array<{text: string, href: string, variant: 'primary' | 'secondary'}>`
- `height?: 'sm' | 'md' | 'lg' | 'full'`

**CSS Modules:**
```css
.hero { }
.heroContent { }
.heroTitle { }
.heroSubtitle { }
.heroBackground { }
.heroOverlay { }
.heroButtons { }
.heightSm { }
.heightMd { }
.heightLg { }
.heightFull { }
```

---

### ImageSlider Component
**File:** `src/components/hero/ImageSlider.tsx` + `ImageSlider.module.css`

**Purpose:** Carousel/slideshow for hero images

**Props:**
- `images: Array<{src: string, alt: string}>`
- `autoplay?: boolean`
- `interval?: number`
- `showControls?: boolean`
- `showIndicators?: boolean`

**Features:**
- Auto-advance slides
- Manual navigation (prev/next)
- Dot indicators
- Smooth transitions
- Pause on hover

**CSS Modules:**
```css
.slider { }
.sliderTrack { }
.slide { }
.slideImage { }
.controls { }
.controlButton { }
.indicators { }
.indicator { }
.indicatorActive { }
```

---

## 3. UI Components

### Button Component
**File:** `src/components/ui/Button.tsx` + `Button.module.css`

**Purpose:** Reusable button with variants

**Props:**
- `variant?: 'primary' | 'secondary' | 'outline' | 'ghost'`
- `size?: 'sm' | 'md' | 'lg'`
- `fullWidth?: boolean`
- `disabled?: boolean`
- `loading?: boolean`
- `onClick?: () => void`
- `href?: string`
- `children: ReactNode`

**CSS Modules:**
```css
.button { }
.primary { }
.secondary { }
.outline { }
.ghost { }
.sizeSm { }
.sizeMd { }
.sizeLg { }
.fullWidth { }
.disabled { }
.loading { }
```

---

### ServiceCard Component
**File:** `src/components/ui/ServiceCard.tsx` + `ServiceCard.module.css`

**Purpose:** Display service offerings

**Props:**
- `title: string`
- `description: string`
- `image: string`
- `href?: string`
- `icon?: ReactNode`

**CSS Modules:**
```css
.card { }
.cardImage { }
.cardContent { }
.cardIcon { }
.cardTitle { }
.cardDescription { }
.cardLink { }
```

---

### PortfolioCard Component
**File:** `src/components/ui/PortfolioCard.tsx` + `PortfolioCard.module.css`

**Purpose:** Showcase celebration/portfolio items

**Props:**
- `title: string`
- `tagline?: string`
- `image: string`
- `category?: string`
- `href?: string`
- `onClick?: () => void`

**Features:**
- Hover effects
- Image overlay
- Category badge

**CSS Modules:**
```css
.card { }
.cardImage { }
.cardOverlay { }
.cardContent { }
.cardCategory { }
.cardTitle { }
.cardTagline { }
```

---

### TeamMemberCard Component
**File:** `src/components/ui/TeamMemberCard.tsx` + `TeamMemberCard.module.css`

**Purpose:** Display team member information

**Props:**
- `name: string`
- `title: string`
- `bio: string`
- `image?: string`
- `socialLinks?: Array<{platform: string, url: string}>`

**CSS Modules:**
```css
.card { }
.cardImage { }
.cardContent { }
.cardName { }
.cardTitle { }
.cardBio { }
.socialLinks { }
```

---

### ProcessStep Component
**File:** `src/components/ui/ProcessStep.tsx` + `ProcessStep.module.css`

**Purpose:** Display process/workflow steps

**Props:**
- `number: number`
- `title: string`
- `description: string`
- `activities?: string[]`
- `isLast?: boolean`

**CSS Modules:**
```css
.step { }
.stepNumber { }
.stepContent { }
.stepTitle { }
.stepDescription { }
.stepActivities { }
.stepConnector { }
```

---

### AchievementBadge Component
**File:** `src/components/ui/AchievementBadge.tsx` + `AchievementBadge.module.css`

**Purpose:** Display awards and achievements

**Props:**
- `award: string`
- `organization: string`
- `year?: string`
- `image?: string`

**CSS Modules:**
```css
.badge { }
.badgeImage { }
.badgeContent { }
.badgeAward { }
.badgeOrganization { }
.badgeYear { }
```

---

### ThemeGallery Component
**File:** `src/components/ui/ThemeGallery.tsx` + `ThemeGallery.module.css`

**Purpose:** Photo gallery grid for themes

**Props:**
- `title: string`
- `description?: string`
- `images: Array<{src: string, alt: string}>`
- `columns?: 2 | 3 | 4`
- `lightbox?: boolean`

**Features:**
- Responsive grid
- Lightbox/modal view
- Lazy loading

**CSS Modules:**
```css
.gallery { }
.galleryHeader { }
.galleryTitle { }
.galleryDescription { }
.galleryGrid { }
.galleryItem { }
.galleryImage { }
.columns2 { }
.columns3 { }
.columns4 { }
```

---

### ContactForm Component
**File:** `src/components/ui/ContactForm.tsx` + `ContactForm.module.css`

**Purpose:** Contact/inquiry form

**Props:**
- `onSubmit: (data: FormData) => Promise<void>`
- `submitButtonText?: string`

**Features:**
- Form validation
- Error handling
- Success/error states
- Loading state

**CSS Modules:**
```css
.form { }
.formGroup { }
.label { }
.input { }
.select { }
.textarea { }
.error { }
.submitButton { }
.successMessage { }
.errorMessage { }
```

---

### VideoPlayer Component
**File:** `src/components/ui/VideoPlayer.tsx` + `VideoPlayer.module.css`

**Purpose:** Embedded video player

**Props:**
- `src: string`
- `poster?: string`
- `autoplay?: boolean`
- `controls?: boolean`
- `muted?: boolean`

**CSS Modules:**
```css
.player { }
.video { }
.poster { }
.playButton { }
.controls { }
```

---

## 4. Feature Components

### ValueProposition Component
**File:** `src/components/features/ValueProposition.tsx` + `ValueProposition.module.css`

**Purpose:** Display value propositions with icons

**Props:**
- `items: Array<{title: string, description: string, icon?: ReactNode, image?: string}>`
- `layout?: 'grid' | 'list'`

**CSS Modules:**
```css
.container { }
.grid { }
.list { }
.item { }
.itemIcon { }
.itemImage { }
.itemTitle { }
.itemDescription { }
```

---

### StatsCounter Component
**File:** `src/components/features/StatsCounter.tsx` + `StatsCounter.module.css`

**Purpose:** Animated statistics/achievements

**Props:**
- `stats: Array<{value: number, label: string, suffix?: string}>`
- `animate?: boolean`

**Features:**
- Count-up animation
- Intersection observer trigger

**CSS Modules:**
```css
.container { }
.stat { }
.statValue { }
.statLabel { }
```

---

### SocialLinks Component
**File:** `src/components/features/SocialLinks.tsx` + `SocialLinks.module.css`

**Purpose:** Social media icon links

**Props:**
- `links: Array<{platform: 'instagram' | 'linkedin' | 'facebook', url: string}>`
- `size?: 'sm' | 'md' | 'lg'`
- `variant?: 'icons' | 'buttons'`

**CSS Modules:**
```css
.container { }
.link { }
.icon { }
.sizeSm { }
.sizeMd { }
.sizeLg { }
.variantIcons { }
.variantButtons { }
```

---

## 5. Shared Types

**File:** `src/types/index.ts`

```typescript
export interface Image {
  src: string;
  alt: string;
}

export interface CTAButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image?: string;
}

export interface Service {
  title: string;
  description: string;
  image: string;
  href?: string;
}

export interface Achievement {
  award: string;
  organization: string;
  year?: string;
  image?: string;
}

export interface PortfolioItem {
  title: string;
  tagline?: string;
  category: string;
  images: Image[];
  videos?: string[];
}
```

---

## 6. Component Usage Guidelines

### Naming Conventions
- PascalCase for component names
- camelCase for CSS module classes
- Descriptive, semantic names

### File Structure
- Each component in its own folder (if complex)
- Co-locate CSS modules with components
- Export from index.ts for cleaner imports

### Props Best Practices
- Use TypeScript interfaces
- Provide sensible defaults
- Document complex props
- Use optional chaining

### Styling Guidelines
- Use CSS modules for scoped styles
- Leverage CSS variables from globals.css
- Mobile-first responsive design
- Consistent spacing and typography

---

## 7. Next Steps

1. Create base layout components (Header, Footer, Container)
2. Build UI components (Button, Cards)
3. Develop feature components
4. Create page-specific components
5. Test components in isolation
6. Integrate into pages
