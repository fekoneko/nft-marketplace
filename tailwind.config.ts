import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#2b2b2b',
        text: '#ffffff',
        'call-to-action': '#a259ff',
        'call-to-action-hover': '#b274ff',
      },
      fontFamily: {
        main: ['Work Sans', 'sans-serif'],
        mono: ['Space Mono', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
