import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#2b2b2b',
        'background-secondary': '#3b3b3b',
        'background-secondary-hover': '#474747',
        text: '#ffffff',
        'text-secondary': '#858584',
        'text-footer': '#cccccc',
        accent: '#a259ff',
        'accent-hover': '#b274ff',
      },
      fontFamily: {
        main: ['Work Sans', 'sans-serif'],
        mono: ['Space Mono', 'sans-serif'],
      },
      fontSize: {
        lg: '1rem',
        '2xl': '1.375rem',
        '3xl': '1.75rem',
        '4xl': '2.375rem',
        '5xl': '3.55rem',
        '6xl': '4.25rem',
      },
      screens: {
        md: '920px',
        xl: '1130px',
      },
    },
  },
  plugins: [],
};
export default config;
