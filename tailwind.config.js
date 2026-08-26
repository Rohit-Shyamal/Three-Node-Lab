/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cms: {
          'warm-white': '#fdfaf6',
          'light-grey': '#f0f0f0',
          'off-white': '#faf9f8',
          'charcoal': '#1a1a1a',
          'black': '#0a0a0a',
          'orange': '#ff5a00',
          'amber': '#ff9900',
        },
        'brand-cyan': '#00e5ff',
        'brand-blue': '#0066ff',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem', // 32px
        '5xl': '2.5rem', // 40px
      },
      letterSpacing: {
        'tightest': '-.075em',
        'widest': '.25em',
      },
      boxShadow: {
        'glow-orange': '0 0 80px -20px rgba(255, 90, 0, 0.5)',
        'glow-amber': '0 0 80px -20px rgba(255, 153, 0, 0.5)',
        'soft': '0 10px 40px -10px rgba(0,0,0,0.05)',
      }
    },
  },
  plugins: [],
}
