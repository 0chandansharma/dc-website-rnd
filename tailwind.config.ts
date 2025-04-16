const flowbite = require("flowbite-react/tailwind");
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#FE6623',
          light: 'rgba(254, 102, 35, 0.2)',
          hover: 'rgba(254, 102, 35, 0.9)',
          dark: '#E54E15',
          50: 'rgba(254, 102, 35, 0.05)',
          100: 'rgba(254, 102, 35, 0.1)',
          200: 'rgba(254, 102, 35, 0.2)',
          300: 'rgba(254, 102, 35, 0.3)',
          400: 'rgba(254, 102, 35, 0.4)',
          500: '#FE6623', // Main primary color
          600: '#E55B1F',
          700: '#CC501B',
          800: '#B24417',
          900: '#993913'
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827'
        }
      },
      fontSize: {
        'xs': 'clamp(10px, 1vw, 14px)',
        'sm': 'clamp(12px, 1.2vw, 16px)',
        'base': 'clamp(14px, 1.5vw, 18px)',
        'lg': 'clamp(16px, 2vw, 20px)',
        'xl': 'clamp(18px, 2.5vw, 24px)',
        '2xl': 'clamp(20px, 3vw, 30px)',
        '3xl': 'clamp(24px, 3.5vw, 36px)',
        '4xl': 'clamp(30px, 4vw, 48px)',
        '5xl': 'clamp(36px, 5vw, 60px)',
        '6xl': 'clamp(48px, 6vw, 72px)',
      },
      spacing: {
        'xs': 'clamp(4px, 0.5vw, 8px)',
        'sm': 'clamp(8px, 1vw, 16px)',
        'md': 'clamp(16px, 2vw, 24px)',
        'lg': 'clamp(24px, 3vw, 32px)',
        'xl': 'clamp(32px, 4vw, 48px)',
        '2xl': 'clamp(48px, 5vw, 64px)',
        '3xl': 'clamp(64px, 6vw, 96px)',
      },
      borderRadius: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '32px',
        'full': '9999px'
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'primary': '0 4px 14px 0 rgba(254, 102, 35, 0.3)',
        'none': 'none'
      },
      transitionDuration: {
        'DEFAULT': '300ms'
      },
      transitionTimingFunction: {
        'DEFAULT': 'cubic-bezier(0.4, 0, 0.2, 1)'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-right': 'slideRight 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
} satisfies Config;