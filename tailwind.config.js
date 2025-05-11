/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(var(--color-primary), 0.05)',
          100: 'rgb(var(--color-primary), 0.1)',
          200: 'rgb(var(--color-primary), 0.2)',
          300: 'rgb(var(--color-primary), 0.3)',
          400: 'rgb(var(--color-primary), 0.6)',
          500: 'rgb(var(--color-primary), 0.8)',
          600: 'rgb(var(--color-primary), 1)',
          700: 'rgb(var(--color-primary), 1.1)',
          800: 'rgb(var(--color-primary), 1.2)',
          900: 'rgb(var(--color-primary), 1.3)',
        },
        secondary: {
          50: 'rgb(var(--color-secondary), 0.05)',
          100: 'rgb(var(--color-secondary), 0.1)',
          200: 'rgb(var(--color-secondary), 0.2)',
          300: 'rgb(var(--color-secondary), 0.3)',
          400: 'rgb(var(--color-secondary), 0.6)',
          500: 'rgb(var(--color-secondary), 0.8)',
          600: 'rgb(var(--color-secondary), 1)',
          700: 'rgb(var(--color-secondary), 1.1)',
          800: 'rgb(var(--color-secondary), 1.2)',
          900: 'rgb(var(--color-secondary), 1.3)',
        },
        accent: {
          50: 'rgb(var(--color-accent), 0.05)',
          100: 'rgb(var(--color-accent), 0.1)',
          200: 'rgb(var(--color-accent), 0.2)',
          300: 'rgb(var(--color-accent), 0.3)',
          400: 'rgb(var(--color-accent), 0.6)',
          500: 'rgb(var(--color-accent), 0.8)',
          600: 'rgb(var(--color-accent), 1)',
          700: 'rgb(var(--color-accent), 1.1)',
          800: 'rgb(var(--color-accent), 1.2)',
          900: 'rgb(var(--color-accent), 1.3)',
        },
        success: {
          500: 'rgb(var(--color-success), 1)',
        },
        warning: {
          500: 'rgb(var(--color-warning), 1)',
        },
        error: {
          500: 'rgb(var(--color-error), 1)',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system', 
          'BlinkMacSystemFont', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'sans-serif'
        ],
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};