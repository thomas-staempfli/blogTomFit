import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // TomFit brand colors from logo
        'tomfit': {
          50: '#edfff4',
          100: '#d5ffe6',
          200: '#aeffcf',
          300: '#92DDAB', // Light green from logo
          400: '#5AD282', // Gradient end
          500: '#50C878', // Primary green from logo
          600: '#3ba861',
          700: '#2f8a4f',
          800: '#296d42',
          900: '#245a38',
          950: '#133235', // Dark teal from logo (text color)
        },
      },
      fontFamily: {
        'display': ['Montserrat', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
