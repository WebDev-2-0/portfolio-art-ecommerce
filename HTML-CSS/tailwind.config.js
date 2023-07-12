// tailwind.config.js
module.exports = {
  future: { },
  purge: { },
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
  variants: { },
  plugins: [
    //...
    require('tailwindcss'),
    require('autoprefixer'),
    //...
  ],
};
