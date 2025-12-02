/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#111111',
          secondary: '#1A1A1A',
          accent: '#222222'
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#CCCCCC',
          accent: '#FFD700'
        },
        gold: {
          light: '#FFD700',
          DEFAULT: '#FFA500',
          dark: '#FF4500'
        },
        primary: {
          50: '#e5e7ff',
          100: '#bec4ff',
          200: '#9da6ff',
          300: '#7c8bff',
          400: '#5e72ff',
          500: '#4161ff',
          600: '#3957ff',
          700: '#2e4bff',
          800: '#2742ff',
          900: '#1133ff',
        },
        secondary: {
          50: '#e3f8ff',
          100: '#b3e7ff',
          200: '#80d5f9',
          300: '#4dc3f5',
          400: '#27b5f3',
          500: '#10a7f0',
          600: '#0d99e5',
          700: '#0988d8',
          800: '#0677cc',
          900: '#0258b6',
        },
        accent: {
          50: '#fff2e9',
          100: '#ffdcc8',
          200: '#ffc5a4',
          300: '#ffad7f',
          400: '#ff9a64',
          500: '#ff874a',
          600: '#ff7743',
          700: '#ff623a',
          800: '#ff4e32',
          900: '#ff2a22',
        },
        'text-primary': '#FFFFFF',
        'text-secondary': '#94A3B8',
        'text-accent': '#FFD700',
        'background-primary': '#111111',
        'background-accent': '#1F1F1F',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        script: ['Great Vibes', 'cursive'],
        allura: ['Allura', 'cursive'],
        dancing: ['Dancing Script', 'cursive'],
      },
      boxShadow: {
        card: '0 10px 30px -15px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/herobg.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      letterSpacing: {
        'wider-plus': '0.1em',
        'widest-plus': '0.15em',
      },
    },
  },
  plugins: [],
};