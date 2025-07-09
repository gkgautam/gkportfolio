'use client';
import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-header-1 shadow-[0px_6px_22px_#00000019]">
      <div className="w-full px-4 sm:px-6 lg:px-10 py-4 sm:py-6 lg:py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 lg:gap-0">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/images/logo.webp" 
              alt="Logo" 
              className="w-[50px] h-[50px] rounded-full"
            />
          </div>
          
          {/* Navigation Menu */}
          <nav className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-12">
            <a 
              href="" 
              className="text-global-4 font-plus-jakarta font-semibold text-base sm:text-lg lg:text-xl leading-6 lg:leading-7 text-center hover:text-global-1 transition-colors duration-200"
            >
            Home
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;