"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
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
          ES CELEBRATIONS
        </Link>
      </div>

      {/* Mobile Menu with Framer Motion */}
      {isMenuOpen && (
        <nav className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuOpen : ''}`}>
          {/* Close Button */}
          <button onClick={() => setIsMenuOpen(false)} className={styles.closeButton} aria-label="Close menu">
            <AnimatedMenuIcon isOpen={true} />
          </button>

          {/* Logo at Top */}
          <Link href="/" className={isHomePage ? styles.menuLogo : styles.menuLogoOpen} onClick={() => setIsMenuOpen(false)}>
            ES CELEBRATIONS
          </Link>

          {/* Menu Items - Vertical Stack */}
          <div className={styles.menuItems}>
            {menuItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className={styles.menuLink}
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
