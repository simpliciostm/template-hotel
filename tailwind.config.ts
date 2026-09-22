import type { Config } from 'tailwindcss';

const config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '40rem',
      md: '48rem',
      lg: '64rem',
      xl: '80rem',
      '2xl': '96rem',
    },
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#f7f2ea',
          soft: '#fbf8f2',
          muted: '#efe4d4',
        },
        ink: {
          DEFAULT: '#221f1b',
          muted: '#5f574d',
          subtle: '#8b7b68',
          inverse: '#fbf8f2',
        },
        taupe: {
          100: '#e8dccb',
          200: '#d7c5ad',
          300: '#b89c78',
          400: '#987647',
          500: '#765733',
        },
        accent: {
          DEFAULT: '#9f7440',
          dark: '#765733',
          soft: '#c5a879',
        },
        line: {
          DEFAULT: '#ded2c1',
          strong: '#cbb79d',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '75rem',
        copy: '42rem',
      },
      borderRadius: {
        soft: '0.375rem',
      },
      boxShadow: {
        soft: '0 1rem 3rem rgb(34 31 27 / 0.08)',
      },
      spacing: {
        gutter: 'clamp(1.25rem, 4vw, 4rem)',
        section: 'clamp(4rem, 8vw, 7.5rem)',
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
