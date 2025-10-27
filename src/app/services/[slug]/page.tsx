"use client";

import { useState, useCallback, useMemo } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'react-masonry-css';
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

const breakpointCols = {
  default: 3,
  1200: 3,
  900: 2,
  600: 1,
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

    setTimeout(() => {
      setDisplayedImages((prev) => [...prev, ...newImages]);
    }, 300);
  }, [displayedImages.length, service.images]);

  const blurDataURL = useMemo(
    () => `data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`,
    []
  );

  return (
    <div className={styles.container}>
      <Navigation />
      
      {/* Preload first batch of images */}
      {service.images.slice(0, IMAGES_PER_PAGE).map((image, index) => (
        <link
          key={`preload-${index}`}
          rel="preload"
          as="image"
          href={image}
        />
      ))}
      
      {/* Hero Section */}
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

      {/* Title Overlay */}
      <div className={styles.heroOverlay}>
        <div className={styles.heroInnerOverlay}>
          <h1 className={styles.heroTitle}>{service.title}</h1>
        </div>
      </div>

      {/* Masonry Gallery with Infinite Scroll */}
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
        >
          <Masonry
            breakpointCols={breakpointCols}
            className={styles.masonryGrid}
            columnClassName={styles.masonryColumn}
          >
            {displayedImages.map((image, index) => (
              <div key={`${image}-${index}`} className={styles.masonryCard}>
                <Image
                  src={image}
                  alt={`${service.title} - Image ${index + 1}`}
                  width={800}
                  height={600}
                  quality={85}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  className={styles.masonryImage}
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  priority={index < 6}
                  loading={index < 6 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </Masonry>
        </InfiniteScroll>
      </main>

      <Footer />
    </div>
  );
}