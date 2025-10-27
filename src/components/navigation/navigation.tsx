"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import styles from "./navigation.module.css"

const AnimatedMenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <motion.line
      x1="5"
      y1="6"
      x2="19"
      y2="6"
      animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
    <motion.line
      x1="2"
      y1="12"
      x2="22"
      y2="12"
      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.2 }}
    />
    <motion.line
      x1="5"
      y1="18"
      x2="19"
      y2="18"
      animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
  </svg>
)

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const menuItems = [
    { label: "ABOUT", href: "/about" },
    { label: "SERVICES", href: "/services" },
    { label: "APPROACH", href: "/approach" },
    { label: "CONTACT", href: "/contact" }
  ]

  // Get current page name
  let currentPage = menuItems.find(item => item.href === pathname)?.label || ""

  if(pathname.includes('services')) currentPage = 'SERVICES'

  return (
    <header className={isHomePage ? styles.header : styles.headerColor}>
      <div className={styles.headerContent}>
        {/* Left Side - Menu Button and Page Name */}
        <div className={styles.leftSection}>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={styles.menuButton} aria-label="Toggle menu">
            <AnimatedMenuIcon isOpen={isMenuOpen} />
          </button>
          {!isHomePage && currentPage && (
            <span className={styles.pageName}>{currentPage}</span>
          )}
        </div>

        {/* Logo - centered on home, right-aligned on other pages */}
        <Link
          href="/"
          className={isHomePage ? styles.logo : styles.logoSmall}
        >
          <Image
            src="/es_horizontal.png"
            alt="ES Celebrations"
            width={isHomePage ? 200 : 150}
            height={isHomePage ? 60 : 45}
            priority
            className={styles.logoImage}
          />
        </Link>
      </div>

      {/* Mobile Menu with Framer Motion */}
      {isMenuOpen && (
        <motion.nav
          className={styles.mobileMenu}
          initial={{ opacity: 0, }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Close Button */}
          <button onClick={() => setIsMenuOpen(false)} className={styles.closeButton} aria-label="Close menu">
            <AnimatedMenuIcon isOpen={true} />
          </button>

          {/* Logo at Top */}
          <motion.div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Link href="/" className={isHomePage ? styles.menuLogo : styles.menuLogoOpen} onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/es_horizontal.png"
                alt="ES Celebrations"
                width={250}
                height={75}
                className={isHomePage ? styles.menuLogoImageHome : styles.menuLogoImage}
              />
            </Link>
          </motion.div>

          {/* Menu Items - Vertical Stack */}
          <div className={styles.menuItems}>
            {menuItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  className={styles.menuLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  )
}
