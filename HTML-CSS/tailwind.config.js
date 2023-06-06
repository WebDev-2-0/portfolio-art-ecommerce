/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./public/painter.jpg')",
      },
    },
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
