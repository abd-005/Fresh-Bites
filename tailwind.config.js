/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enable class-based dark mode for next-themes
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Mapping the CSS variables from our RootLayout
        poppins: ['var(--font-poppins)', 'sans-serif'],
        lora: ['var(--font-lora)', 'serif'],
      },
      colors: {
        // Customizing the brand color for Fresh Bites
        orange: {
          50: '#fff7ed',
          500: '#f97316', // Main Brand Color
          600: '#ea580c',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};