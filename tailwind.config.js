/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#020b18',
        foreground: '#f4f8ff',
        muted: '#93a4bb',
        primary: '#2f7df6',
        cyan: '#33d5e8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        pulseSlow: 'pulseSlow 4s ease-in-out infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        marquee: { to: { transform: 'translateX(-50%)' } },
        pulseSlow: { '0%,100%': { opacity: '.3' }, '50%': { opacity: '.9' } },
      },
    },
  },
  plugins: [],
};
