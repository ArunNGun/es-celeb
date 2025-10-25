"use client"

import Navigation from "@/components/navigation/navigation"
import HeroCarousel from "@/components/hero/hero-carousel"
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section with Carousel */}
      <section className={styles.hero}>
        <HeroCarousel />
      </section>
    </div>
  )
}
