"use client"

import Link from "next/link"
import Image from "next/image"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider1} />
      <div className={styles.divider} />
      
      <div className={styles.content}>
        {/* Left Side - Logo */}
        <div className={styles.left}>
          <div className={styles.logo}>
            <Image
              src="/es_text.png"
              alt="ES Celebrations"
              width={180}
              height={180}
              className={styles.logoImage}
            />
          </div>
        </div>

        {/* Right Side - Links and Social */}
        <div className={styles.right}>
          <div className={styles.links}>
            <Link href="/contact" className={styles.link}>
              CONTACT
            </Link>
            <span className={styles.linkDivider}>FOLLOW US ON SOCIAL</span>
            
            <div className={styles.socialIcons}>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              
              <a 
                href="https://pinterest.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Pinterest"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 12c0-2.5 2-4.5 4.5-4.5S17 9.5 17 12c0 1.5-.5 2.5-1.5 3.5-.5.5-1 .5-1.5.5-.5 0-1-.5-1-1 0-.5.5-1 1-1s1 .5 1 1"></path>
                </svg>
              </a>
              
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} ES Celebrations. All rights reserved.
        </p>
        <div className={styles.bottomLinks}>
          <Link href="/privacy" className={styles.bottomLink}>
            Privacy Policy
          </Link>
          <Link href="/terms" className={styles.bottomLink}>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
