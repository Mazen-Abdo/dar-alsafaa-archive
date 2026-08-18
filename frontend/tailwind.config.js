/** @type {import('tailwindcss').Config} */

// Helper: creates a color that supports Tailwind opacity modifiers
// e.g. bg-primary/50 → rgb(0 53 39 / 0.5)
const withAlpha = (cssVar) => `rgb(var(${cssVar}) / <alpha-value>)`;

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  // ✅ Dark mode driven by class on <html>
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        // ── Primary ──────────────────────────────────────────────────────────
        "primary":                  withAlpha("--primary-rgb"),
        "on-primary":               withAlpha("--on-primary-rgb"),
        "primary-container":        withAlpha("--primary-container-rgb"),
        "on-primary-container":     withAlpha("--on-primary-container-rgb"),
        "primary-fixed":            withAlpha("--primary-fixed-rgb"),
        "primary-fixed-dim":        withAlpha("--primary-fixed-dim-rgb"),
        "on-primary-fixed":         withAlpha("--on-primary-fixed-rgb"),
        "on-primary-fixed-variant": withAlpha("--on-primary-fixed-rgb"),

        // ── Secondary ─────────────────────────────────────────────────────────
        "secondary":                withAlpha("--secondary-rgb"),
        "on-secondary":             withAlpha("--on-secondary-rgb"),
        "secondary-container":      withAlpha("--secondary-container-rgb"),
        "on-secondary-container":   withAlpha("--secondary-container-rgb"),
        "secondary-fixed":          withAlpha("--secondary-fixed-rgb"),
        "secondary-fixed-dim":      withAlpha("--secondary-fixed-dim-rgb"),
        "on-secondary-fixed":       withAlpha("--on-secondary-rgb"),

        // ── Tertiary ──────────────────────────────────────────────────────────
        "tertiary":                 withAlpha("--tertiary-rgb"),
        "on-tertiary":              withAlpha("--on-tertiary-rgb"),
        "tertiary-container":       withAlpha("--tertiary-container-rgb"),
        "on-tertiary-container":    withAlpha("--on-tertiary-container-rgb"),
        "tertiary-fixed":           withAlpha("--tertiary-rgb"),
        "tertiary-fixed-dim":       withAlpha("--tertiary-rgb"),
        "on-tertiary-fixed":        withAlpha("--on-tertiary-rgb"),
        "on-tertiary-fixed-variant":withAlpha("--on-tertiary-rgb"),

        // ── Error ─────────────────────────────────────────────────────────────
        "error":               withAlpha("--error-rgb"),
        "on-error":            withAlpha("--on-error-rgb"),
        "error-container":     withAlpha("--error-container-rgb"),
        "on-error-container":  withAlpha("--on-error-container-rgb"),

        // ── Background & Surface ──────────────────────────────────────────────
        "background":           withAlpha("--background-rgb"),
        "on-background":        withAlpha("--on-background-rgb"),
        "surface":              withAlpha("--surface-rgb"),
        "on-surface":           withAlpha("--on-surface-rgb"),
        "surface-dim":          withAlpha("--surface-dim-rgb"),
        "surface-bright":       withAlpha("--surface-bright-rgb"),
        "surface-variant":      withAlpha("--surface-variant-rgb"),
        "on-surface-variant":   withAlpha("--on-surface-variant-rgb"),
        "surface-tint":         withAlpha("--surface-tint-rgb"),

        // ── Surface containers ────────────────────────────────────────────────
        "surface-container-lowest":  withAlpha("--surface-container-lowest-rgb"),
        "surface-container-low":     withAlpha("--surface-container-low-rgb"),
        "surface-container":         withAlpha("--surface-container-rgb"),
        "surface-container-high":    withAlpha("--surface-container-high-rgb"),
        "surface-container-highest": withAlpha("--surface-container-highest-rgb"),

        // ── Inverse ───────────────────────────────────────────────────────────
        "inverse-surface":    withAlpha("--inverse-surface-rgb"),
        "inverse-on-surface": withAlpha("--inverse-on-surface-rgb"),
        "inverse-primary":    withAlpha("--inverse-primary-rgb"),

        // ── Outline ───────────────────────────────────────────────────────────
        "outline":         withAlpha("--outline-rgb"),
        "outline-variant": withAlpha("--outline-variant-rgb"),
      },

      // ── Typography ────────────────────────────────────────────────────────
      fontFamily: {
        "title-md":           ["IBM Plex Sans Arabic", "sans-serif"],
        "label-sm":           ["IBM Plex Sans Arabic", "sans-serif"],
        "label-md":           ["IBM Plex Sans Arabic", "sans-serif"],
        "display-lg":         ["IBM Plex Sans Arabic", "sans-serif"],
        "body-lg":            ["IBM Plex Sans Arabic", "sans-serif"],
        "display-sm":         ["IBM Plex Sans Arabic", "sans-serif"],
        "headline-md":        ["IBM Plex Sans Arabic", "sans-serif"],
        "title-lg":           ["IBM Plex Sans Arabic", "sans-serif"],
        "headline-lg-mobile": ["IBM Plex Sans Arabic", "sans-serif"],
        "headline-lg":        ["IBM Plex Sans Arabic", "sans-serif"],
        "body-md":            ["IBM Plex Sans Arabic", "sans-serif"],
      },

      fontSize: {
        "title-md":           ["18px", { lineHeight: "26px",  fontWeight: "500" }],
        "label-sm":           ["11px", { lineHeight: "14px",  fontWeight: "500" }],
        "label-md":           ["12px", { lineHeight: "16px",  letterSpacing: "0.05em", fontWeight: "500" }],
        "display-lg":         ["48px", { lineHeight: "60px",  letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-lg":            ["16px", { lineHeight: "24px",  fontWeight: "400" }],
        "display-sm":         ["36px", { lineHeight: "44px",  letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-md":        ["24px", { lineHeight: "32px",  fontWeight: "600" }],
        "title-lg":           ["20px", { lineHeight: "28px",  fontWeight: "600" }],
        "headline-lg-mobile": ["24px", { lineHeight: "32px",  fontWeight: "600" }],
        "headline-lg":        ["30px", { lineHeight: "38px",  fontWeight: "600" }],
        "body-md":            ["14px", { lineHeight: "20px",  fontWeight: "400" }],
      },

      // ── Border radius ─────────────────────────────────────────────────────
      borderRadius: {
        DEFAULT: "0.25rem",
        sm:      "0.25rem",
        md:      "0.375rem",
        lg:      "0.5rem",
        xl:      "0.75rem",
        "2xl":   "1rem",
        "3xl":   "1.5rem",
        full:    "9999px",
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
};
