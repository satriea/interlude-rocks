/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'crt-flicker': 'flicker 0.15s infinite',
        'scanline': 'scanline 8s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        'noise': 'noise 0.2s infinite',
      },
      keyframes: {
        flicker: {
          '0%': { opacity: '0.01' },
          '50%': { opacity: '0.03' },
          '100%': { opacity: '0.02' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        noise: {
      '0%, 100%': { transform: 'translate(0,0)' },
      '10%': { transform: 'translate(-5%,-5%)' },
      '30%': { transform: 'translate(5%,5%)' },
      '50%': { transform: 'translate(-10%,5%)' },
      '70%': { transform: 'translate(10%,10%)' },
      '90%': { transform: 'translate(-5%,10%)' },
    }
      },
    },
  },
  plugins: [],
}