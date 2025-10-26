"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import styles from "./navigation.module.css"

const MenuIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
)

const CloseIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const menuItems = [
    { label: "ABOUT", href: "/about" },
    { label: "EVENTS", href: "/events" },
    { label: "APPROACH", href: "/approach" },
    { label: "CONTACT", href: "/contact" }
  ]

  // Get current page name
  const currentPage = menuItems.find(item => item.href === pathname)?.label || ""

  return (
    <header className={isHomePage ? styles.header : styles.headerColor}>
      <div className={styles.headerContent}>
        {/* Left Side - Menu Button and Page Name */}
        <div className={styles.leftSection}>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={styles.menuButton} aria-label="Toggle menu">
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
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

      {/* Mobile Menu with CSS Transitions */}
      {isMenuOpen && (
        <nav className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuOpen : ''}`}>
          {/* Close Button */}
          <button onClick={() => setIsMenuOpen(false)} className={styles.closeButton} aria-label="Close menu">
            <CloseIcon />
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
