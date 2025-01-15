/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        DesktopBg: "url('/Images/DesktopBg.svg')",
        MobileBg: "url('/Images/MobileBg.svg')",
      },
      boxShadow: {
        custom: "0px 15px 20px -5px rgba(13, 113, 130, 0.15)",
      },
    },
  },
  plugins: [],
};
