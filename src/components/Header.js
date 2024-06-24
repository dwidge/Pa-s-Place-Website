// src/components/Header.js

import React, { useEffect, useState } from 'react';

function Header() {
  const [shrinkLogo, setShrinkLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrinkLogo(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${shrinkLogo ? 'shadow-md' : 'shadow-none'}`}>
      <div className="container mx-auto px-4 py-6 bg-transparent flex items-center justify-between">
        <div className="flex items-center transition-all duration-300" style={{ height: shrinkLogo ? '105px' : '125px' }}>
          <img src="/logo.png" alt="Logo" className="transition-all duration-300" style={{ height: shrinkLogo ? '105px' : '125px' }} />
          <h1 className={`font-bold text-gray-800 transition-all duration-300 ${shrinkLogo ? 'text-xl' : 'text-2xl'}`}>Pa's Place</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
