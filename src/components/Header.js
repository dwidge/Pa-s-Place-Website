import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './header.module.css';
import logoImg from '@/../public/logo.png';
import Image from 'next/image';

function Header() {
  const [shrinkLogo, setShrinkLogo] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [selectedLink, setSelectedLink] = useState('home');
  let scrollTimeout;

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      clearTimeout(scrollTimeout);

      setShrinkLogo(window.scrollY > 0);
      setShadow(true);

      scrollTimeout = setTimeout(() => {
        setShadow(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    const path = router.pathname;
    switch (path) {
      case '/aboutUs':
        setSelectedLink('about');
        break;
      case '/donate':
        setSelectedLink('donate');
        break;
      case '/volunteer':
        setSelectedLink('volunteer');
        break;
      case '/reach-out':
        setSelectedLink('reach-out');
        break;
      default:
        setSelectedLink('home');
        break;
    }
  }, [router.pathname]);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${
        shrinkLogo && shadow ? 'shadow-md' : 'shadow-none'
      }`}
    >
      <div
        className={`${styles.container} mx-auto px-4 py-6 bg-transparent flex items-center justify-between`}
      >
        <div
          className="flex items-center transition-all duration-300"
          style={{ height: shrinkLogo ? '105px' : '125px' }}
        >
          <Link href="/" className="flex items-center">
            <Image
              src={logoImg}
              alt="Logo"
              className="transition-all duration-300"
              style={{ height: shrinkLogo ? '105px' : '125px' }}
            />
            <h1
              className={`${
                styles.logoText
              } font-bold text-white transition-all duration-300 ${
                shrinkLogo ? 'text-xl' : 'text-2xl'
              }`}
            >
              Pa's Place
            </h1>
          </Link>
        </div>
        <nav className="flex items-center">
          <Link
            href="/"
            className={`${styles.navLink} ${
              selectedLink === 'home' ? styles.selected : ''
            } mx-4`}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </Link>
          <Link
            href="/aboutUs"
            className={`${styles.navLink} ${
              selectedLink === 'about' ? styles.selected : ''
            } mx-4`}
            onClick={() => handleLinkClick('about')}
          >
            About
          </Link>
          <Link
            href="/donate"
            className={`${styles.navLink} ${
              selectedLink === 'donate' ? styles.selected : ''
            } mx-4`}
            onClick={() => handleLinkClick('donate')}
          >
            Donate & Volunteer
          </Link>
          <Link
            href="/reach-out"
            className={`${styles.navLink} ${
              selectedLink === 'reach-out' ? styles.selected : ''
            } mx-4`}
            onClick={() => handleLinkClick('reach-out')}
          >
            Reach-Out
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
