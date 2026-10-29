/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // FamResto Light Warm Palette
        "fam-ivory": "#FFF8EC",
        "fam-card": "#FFFFFF",
        "fam-secondary": "#FFF0D9",
        "fam-orange": "#FF5A1F",
        "fam-terracotta": "#C94316",
        "fam-dark": "#382216",
        "fam-text-sec": "#806A58",
        "fam-border": "#F0DCC2",
        "fam-veg": "#4F8A43",
        "fam-nonveg": "#D94335",
        "fam-yellow": "#F6C94D",

        // Semantic Token Mappings (Warm Ivory & Terracotta Theme)
        "background": "#FFF8EC",
        "surface": "#FFF8EC",
        "surface-container-lowest": "#FFFFFF",
        "surface-container-low": "#FFFFFF",
        "surface-container": "#FFF0D9",
        "surface-container-high": "#FCE8CE",
        "surface-container-highest": "#F7DEC0",
        "surface-dim": "#F7EDDE",
        "surface-bright": "#FFFFFF",
        "surface-variant": "#FFF0D9",

        "on-background": "#382216",
        "on-surface": "#382216",
        "on-surface-variant": "#806A58",
        "outline": "#806A58",
        "outline-variant": "#F0DCC2",

        "primary": "#FF5A1F",
        "primary-container": "#FF5A1F",
        "primary-fixed": "#FF5A1F",
        "primary-fixed-dim": "#C94316",
        "on-primary": "#FFFFFF",
        "on-primary-container": "#FFFFFF",
        "on-primary-fixed": "#FFFFFF",
        "on-primary-fixed-variant": "#382216",

        "secondary": "#C94316",
        "secondary-container": "#FFF0D9",
        "secondary-fixed": "#382216",
        "secondary-fixed-dim": "#806A58",
        "on-secondary": "#FFFFFF",
        "on-secondary-container": "#382216",
        "on-secondary-fixed": "#382216",
        "on-secondary-fixed-variant": "#806A58",

        "tertiary": "#F6C94D",
        "tertiary-container": "#FFF0D9",
        "tertiary-fixed": "#F6C94D",
        "tertiary-fixed-dim": "#F6C94D",
        "on-tertiary": "#382216",
        "on-tertiary-container": "#382216",

        "error": "#D94335",
        "error-container": "#FFEAEA",
        "on-error": "#FFFFFF",
        "on-error-container": "#8C1D18",

        // Retain legacy aliases pointing to new warm palette
        "nxt-bg": "#FFF8EC",
        "nxt-card": "#FFFFFF",
        "nxt-brown": "#382216",
        "nxt-orange": "#FF5A1F",
        "nxt-light": "#382216",
        "nxt-border": "#F0DCC2",
        "nxt-veg": "#4F8A43",
        "nxt-nonveg": "#D94335",
        "nxt-yellow": "#F6C94D",
      },
      fontFamily: {
        sans: ["'Outfit'", "'Plus Jakarta Sans'", "sans-serif"],
        script: ["'Caveat'", "cursive"],
      },
      borderRadius: {
        "DEFAULT": "0.375rem",
        "md": "0.75rem",
        "lg": "1rem",
        "xl": "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "full": "9999px"
      },
      boxShadow: {
        "fam-card": "0 4px 16px -2px rgba(56, 34, 22, 0.06), 0 2px 6px -1px rgba(56, 34, 22, 0.04)",
        "fam-card-hover": "0 8px 24px -4px rgba(56, 34, 22, 0.1), 0 4px 8px -2px rgba(56, 34, 22, 0.06)",
        "fam-orange": "0 8px 24px -4px rgba(255, 90, 31, 0.35)",
        "fam-floating": "0 8px 28px -4px rgba(56, 34, 22, 0.12), 0 4px 12px -2px rgba(255, 90, 31, 0.2)",
      },
      spacing: {
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "0.75rem",
        "space-lg": "1rem",
        "space-xl": "1.5rem",
        "gutter": "1rem",
      },
      screens: {
        xs: '420px',
      }
    },
  },
  plugins: [],
}
