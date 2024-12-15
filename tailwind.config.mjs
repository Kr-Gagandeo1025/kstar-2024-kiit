/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
        "hero-bg-img" : "url(../public/images/bg-texture.svg)",
        'custom-red-radial': 'radial-gradient(circle, #AC1D39 7%, #3A130E 100%)',
        'reg-btn_brdr-gradient': 'linear-gradient(to right, #E4951B 0%, #FFF08C 52%, #E69D24 100%)',
        'reg-text-gradient': 'linear-gradient(to bottom, #8D6231 0%, #F4C651 49%, #8A5F30 100%)',
        'reg-btn_bg-gradient': 'linear-gradient(to bottom, #5B161B 0%, #951C31 44%, #64171E 100%)',
        'cat-bg-gradient': 'linear-gradient(to bottom right, #F9C342 0%, #E92556 100%)',
      }
    },
  },
  plugins: [],
};
