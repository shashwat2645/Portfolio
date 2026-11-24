/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        surface2: 'var(--surface2)',
        border: 'var(--border)',
        line: 'var(--line)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        accent2: 'var(--accent2)',
        'on-accent': 'var(--on-accent)',
        ok: 'var(--ok)',
        band: 'var(--band)',
        'band-accent': 'var(--band-accent)',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        card: '20px',
        button: '12px',
        chip: '8px',
        pill: '999px',
      },
      maxWidth: {
        content: '1120px',
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
      },
      boxShadow: {
        'card-hover': '0 12px 32px -4px rgba(0, 0, 0, 0.15)',
        'glow-accent': '0 0 40px -10px var(--accent)',
      },
      transitionDuration: {
        '150': '150ms',
      }
    },
  },
  plugins: [],
};
