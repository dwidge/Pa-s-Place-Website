import Link from 'next/link';
import Image from 'next/image';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { useState } from 'react';
import styles from './Footer.module.css';
import footerBg from '@/../public/footer/bg.png';
import logoImg from '@/../public/logo.png';

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <footer
      className={styles.footer}
      style={{ backgroundImage: `url('${footerBg.src}')` }}
    >
      <div className={styles.footerOverlay}></div>
      <div className={`${styles.footerContainer} container mx-auto px-4`}>
        <div className="mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <Image
              src={logoImg}
              alt="Pa's Place Logo"
              width={50}
              height={50}
              className="mr-2"
            />
            <h2 className="text-white text-2xl font-bold">Pa's Place</h2>
          </div>
          <p className="text-white mb-4">
            Bringing the community together through volunteerism and support.
          </p>
          <p className="text-white mb-4">
            © 2024 Pa's Place. All rights reserved.
          </p>
          <p className="text-white text-sm">Designed by Keagan Gilmore</p>
        </div>
        <div className="mb-8 md:mb-0">
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li className="mb-2">
              <Link href="/">Home</Link>
            </li>
            <li className="mb-2">
              <Link href="/aboutUs">About Us</Link>
            </li>
            <li className="mb-2">
              <Link href="/donate">Donate & Volunteer</Link>
            </li>
            <li className="mb-2">
              <Link href="/reach-out">Reach Out</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Contact Us</h3>
          <div className={styles.footerContact}>
            <p className="text-white mb-2">
              <a
                href="https://www.google.com/maps/d/u/0/edit?mid=1sgAUvrOYHiKmndi8EFMzghuUgxeYLtw&ll=-30.377096718500717%2C30.696060901428037&z=19"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline"
              >
                35b Umdoni Road, Pennington KZN
              </a>
            </p>
            <p
              className="text-white mb-2 cursor-pointer"
              onClick={() => copyToClipboard('info@pasplace.co.za')}
            >
              Email: info@pasplace.co.za
            </p>
            <p
              className="text-white mb-2 cursor-pointer"
              onClick={() => copyToClipboard('083 309 7288')}
            >
              Phone: Pierre: 083 309 7288
            </p>
          </div>
          <div className={`flex mt-4 ${styles.footerSocialLinks}`}>
            <Link
              href="/comingSoon"
              className={`facebook text-white mr-4 ${styles.facebook}`}
            >
              <FaFacebookF size={24} />
            </Link>
            <Link
              href="/comingSoon"
              className={`twitter text-white mr-4 ${styles.twitter}`}
            >
              <FaTwitter size={24} />
            </Link>
            <Link
              href="/comingSoon"
              className={`instagram text-white mr-4 ${styles.instagram}`}
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="/comingSoon"
              className={`linkedin text-white ${styles.linkedin}`}
            >
              <FaLinkedinIn size={24} />
            </Link>
          </div>
        </div>
      </div>
      {copied && <div className={styles.copiedNotification}>Copied!</div>}
    </footer>
  );
};

export default Footer;
