// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Ocean Dragon Color Palette
        "dragon-emerald": "#28dd86",
        "dragon-teal": "#109ca7",
        "dragon-navy": "#0c366f",
        "dragon-deep-purple": "#23024d",
        "dragon-dark-purple": "#34073a",

        // Semantic color mappings
        primary: {
          DEFAULT: "#0c366f", // dragon-navy
          foreground: "#ffffff",
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0c366f",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        secondary: {
          DEFAULT: "#109ca7", // dragon-teal
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#28dd86", // dragon-emerald
          foreground: "#23024d", // dragon-deep-purple
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f1f5f9",
          foreground: "#64748b",
        },
        border: "#e2e8f0",
        input: "#e2e8f0",
        ring: "#0c366f", // dragon-navy
      },
    },
  },
  plugins: [],
};
