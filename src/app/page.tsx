"use client"

import Navigation from "@/components/navigation/navigation"
import HeroCarousel from "@/components/hero/hero-carousel"
import PageLoader from "@/components/loading/page-loader"
import styles from "./page.module.css"

export default function Home() {
  return (
    <>
      <PageLoader />
      <div className={styles.container}>
        {/* Navigation */}
        <Navigation />

        {/* Hero Section with Carousel */}
        <section className={styles.hero}>
          <HeroCarousel />
        </section>
      </div>
    </>
  )
}
