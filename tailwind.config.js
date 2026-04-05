import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

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
        "tertiary": "#9cff93",
        "surface-variant": "#262627",
        "on-secondary-fixed": "#41009a",
        "on-secondary-fixed-variant": "#6300e2",
        "inverse-on-surface": "#565556",
        "secondary-fixed-dim": "#ceb9ff",
        "secondary": "#ac89ff",
        "background": "#0e0e0f",
        "on-primary-fixed-variant": "#005e64",
        "on-tertiary-fixed": "#00440a",
        "surface-container-low": "#131314",
        "on-primary": "#005d63",
        "on-error-container": "#ffa8a3",
        "on-tertiary": "#006413",
        "surface-bright": "#2c2c2d",
        "on-primary-container": "#005359",
        "inverse-surface": "#fcf8f9",
        "on-background": "#ffffff",
        "secondary-container": "#7000ff",
        "primary": "#8ff5ff",
        "outline": "#767576",
        "surface-container-high": "#201f21",
        "surface-container-highest": "#262627",
        "on-tertiary-fixed-variant": "#006513",
        "error": "#ff716c",
        "secondary-dim": "#874cff",
        "primary-container": "#00eefc",
        "inverse-primary": "#006a71",
        "tertiary-container": "#00fc40",
        "error-dim": "#d7383b",
        "surface-container": "#1a191b",
        "on-surface-variant": "#adaaab",
        "on-tertiary-container": "#005a10",
        "tertiary-fixed": "#00fc40",
        "primary-fixed-dim": "#00deec",
        "surface-dim": "#0e0e0f",
        "on-primary-fixed": "#003f43",
        "on-error": "#490006",
        "surface": "#0e0e0f",
        "surface-container-lowest": "#000000",
        "on-secondary": "#290067",
        "secondary-fixed": "#dac9ff",
        "primary-dim": "#00deec",
        "error-container": "#9f0519",
        "primary-fixed": "#00eefc",
        "outline-variant": "#484849",
        "surface-tint": "#8ff5ff",
        "tertiary-dim": "#00ec3b",
        "tertiary-fixed-dim": "#00ec3b",
        "on-secondary-container": "#f8f1ff",
        "on-surface": "#ffffff"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Space Grotesk", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"]
      }
    },
  },
  plugins: [
    forms,
    containerQueries
  ],
}
