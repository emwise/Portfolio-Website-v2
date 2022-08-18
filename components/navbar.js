import Link from 'next/link';
import styles from './navbar.module.css'
import Image from 'next/image';
import { useState } from 'react';

const title = "Home"

export default function Navbar(){
  const [isCollapsed, setIsCollapsed] = useState(false);
  const collapsable = isCollapsed
  ? styles.listItemDropdown
  : styles.listItemDropdownCollapse;
  const navbarResizewithCollapse = isCollapsed
  ? styles.navbarCollapse
  : styles.navbar

  return(
    <nav className={navbarResizewithCollapse}>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.listItemBrand}>
            <Link href={`/`}>
              <a>{title}</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href={'/aboutMe'}>
              <a>About Me </a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href={'/blog'}>
              <a>Blog </a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href={'/contactMe'}>
              <a>Contact Me </a>
            </Link>
          </li>
          <li className={styles.hamburger}>
            <button 
              className={styles.hamburgerButton}
              onClick={() => {
                setIsCollapsed(!isCollapsed)
              }}
            >
              <Image
                priority
                src="/images/hamburger.png"
                height={25}
                width={25}
                alt="hamburger icon"
              />
            </button>
          </li>
          <li className={collapsable}>
            <Link href={'/aboutMe'}>
              <a>About Me </a>
            </Link>
          </li>
          <li className={collapsable}>
            <Link href={'/blog'}>
              <a>Blog </a>
            </Link>
          </li>
          <li className={collapsable}>
            <Link href={'/contactMe'}>
              <a>Contact Me </a>
            </Link>
          </li>
          <li className={styles.listItemLinkList}>
            <ul>
              <li className={styles.listItemLink}>
                <a href='https://www.linkedin.com/in/emma-wise-23802014a/' target="_blank">
                <Image
                  priority
                  src="/images/linkedin.png"
                  height={20}
                  width={20}
                  alt="LinkedIn Logo"
                />
                </a>
              </li>
              <li className={styles.listItemLink}>
                <a href='https://github.com/emwise' target="_blank">
                <Image
                  priority
                  src="/images/github.png"
                  height={20}
                  width={20}
                  alt="Github Logo"
                />
                </a>
              </li>
              <li className={styles.listItemLink}>
                <a href='mailto:emma9wise@gmail.com'>
                  <Image
                    priority
                    src="/images/email.png"
                    height={20}
                    width={20}
                    alt="Email Emma"
                  />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}