import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a4d3e',
          light: '#2d6b53',
          lighter: '#3d7b63',
        },
        accent: {
          DEFAULT: '#3dd598',
          light: '#7fb89e',
          lighter: '#a8e6c5',
        },
        background: {
          DEFAULT: '#f0f4f3',
          light: '#d8e9e4',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
