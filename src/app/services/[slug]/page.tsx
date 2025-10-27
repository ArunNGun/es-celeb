"use client";

import { useState, useCallback, useMemo } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import InfiniteScroll from 'react-infinite-scroll-component';
import Navigation from '@/components/navigation/navigation';
import Footer from '@/components/footer/footer';
import { getServiceBySlug, services } from '@/data/services';
import styles from './service-gallery.module.css';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

const IMAGES_PER_PAGE = 12;

// Generate aspect ratios for masonry layout
const getAspectRatio = (index: number): string => {
  const ratios = ['2/3', '3/4', '4/3', '3/2', '1/1'];
  return ratios[index % ratios.length];
};

// Shimmer effect for loading placeholder
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#e8e4df" offset="20%" />
      <stop stop-color="#f5f1ed" offset="50%" />
      <stop stop-color="#e8e4df" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#e8e4df" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export default function ServiceGalleryPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const [displayedImages, setDisplayedImages] = useState(
    service.images.slice(0, IMAGES_PER_PAGE)
  );
  const [hasMore, setHasMore] = useState(
    service.images.length > IMAGES_PER_PAGE
  );

  // Memoize the fetch function to prevent recreating on every render
  const fetchMoreData = useCallback(() => {
    const currentLength = displayedImages.length;
    const newImages = service.images.slice(
      currentLength,
      currentLength + IMAGES_PER_PAGE
    );

    if (newImages.length === 0) {
      setHasMore(false);
      return;
    }

    // Simulate network delay for better UX
    setTimeout(() => {
      setDisplayedImages((prev) => [...prev, ...newImages]);
    }, 300);
  }, [displayedImages.length, service.images]);

  // Memoize the blur data URL to avoid recreating on every render
  const blurDataURL = useMemo(
    () => `data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`,
    []
  );

  return (
    <div className={styles.container}>
      <Navigation />
      
      {/* Hero Section with optimized loading */}
      <div className={styles.hero}>
        <Image
          src={service.featuredImage}
          alt={service.title}
          fill
          priority
          quality={90}
          className={styles.heroImage}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </div>

      {/* Title Overlay - positioned to overlap both sections */}
      <div className={styles.heroOverlay}>
        <div className={styles.heroInnerOverlay}>
          <h1 className={styles.heroTitle}>{service.title}</h1>
        </div>
      </div>

      {/* Gallery Grid with Infinite Scroll */}
      <main className={styles.main}>
        <InfiniteScroll
          dataLength={displayedImages.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <div className={styles.loader}>
              <div className={styles.loaderSpinner}></div>
              <p>Loading more beautiful moments...</p>
            </div>
          }
          endMessage={
            <div className={styles.endMessage}>
              You&apos;ve reached the end of our {service.title.toLowerCase()} gallery
            </div>
          }
          className={styles.gallery}
        >
          {displayedImages.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className={styles.galleryItem}
              style={{ aspectRatio: getAspectRatio(index) }}
            >
              <Image
                src={image}
                alt={`${service.title} - Image ${index + 1}`}
                fill
                quality={85}
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 25vw"
                className={styles.galleryImage}
                placeholder="blur"
                blurDataURL={blurDataURL}
                loading={index < IMAGES_PER_PAGE ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </InfiniteScroll>
      </main>

      <Footer />
    </div>
  );
}