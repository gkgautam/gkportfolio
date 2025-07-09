'use client';
import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  type = 'button',
  className = '',
  fullWidth = false,
  loading = false,
  ...props
}) => {
  const variants = {
    primary: 'bg-button-1 text-global-4 hover:bg-global-4 hover:text-button-1 active:bg-global-5 focus:ring-global-1 border border-button-1',
    secondary: 'bg-global-7 text-global-1 hover:bg-global-6 active:bg-global-5 focus:ring-global-1',
    outline: 'border border-button-1 text-global-4 bg-transparent hover:bg-button-1 active:bg-global-3 focus:ring-global-1',
    ghost: 'text-global-4 bg-transparent hover:bg-global-3 active:bg-global-4 focus:ring-global-1',
    danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus:ring-red-500'
  };

  // Mobile-first responsive sizes
  const sizes = {
    xs: 'px-2 py-1 text-xs sm:px-2.5 sm:py-1.5 sm:text-xs',
    sm: 'px-4 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm md:text-sm',
    md: 'px-6 py-2 text-xs sm:px-7 sm:py-2.5 sm:text-sm md:text-base',
    lg: 'px-8 py-2.5 text-sm sm:px-9 sm:py-3 sm:text-base md:text-lg lg:text-xl',
    xl: 'px-10 py-3 text-base sm:px-12 sm:py-4 sm:text-lg md:text-xl lg:text-2xl'
  };

  // Responsive border radius
  const responsiveRadius = 'rounded-lg sm:rounded-xl md:rounded-2xl';

  // Responsive focus ring
  const responsiveFocus = 'focus:ring-2 sm:focus:ring-2 md:focus:ring-4';

  // Loading spinner component
  const LoadingSpinner = () => (
    <svg 
      className="animate-spin h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  return (
    <button
      type={type}
      onClick={disabled || loading ? undefined : onClick}
      disabled={disabled || loading}
      className={`
        ${responsiveRadius}
        transition-all 
        duration-200 
        ease-in-out
        focus:outline-none 
        ${responsiveFocus}
        focus:ring-opacity-50
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? 'w-full' : ''}
        ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-105 active:scale-95'} 
        ${loading ? 'relative' : ''}
        font-poppins
        font-medium
        inline-flex
        items-center
        justify-center
        min-h-[36px] sm:min-h-[40px]
        touch-manipulation
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && <LoadingSpinner />}
      <span className={loading ? 'opacity-75' : ''}>{children}</span>
    </button>
  );
};

export default Button;