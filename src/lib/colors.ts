/**
 * Ocean Dragon Color Palette
 * A cohesive color scheme inspired by ocean depths and dragon scales
 */

export const oceanDragonPalette = {
  // Main palette colors from the design
  emerald: {
    hex: "#28dd86",
    rgb: "rgb(40, 221, 134)",
    hsl: "hsl(151, 73%, 51%)",
  },
  teal: {
    hex: "#109ca7",
    rgb: "rgb(16, 156, 167)",
    hsl: "hsl(184, 82%, 36%)",
  },
  navy: {
    hex: "#0c366f",
    rgb: "rgb(12, 54, 111)",
    hsl: "hsl(215, 81%, 24%)",
  },
  deepPurple: {
    hex: "#23024d",
    rgb: "rgb(35, 2, 77)",
    hsl: "hsl(266, 95%, 15%)",
  },
  darkPurple: {
    hex: "#34073a",
    rgb: "rgb(52, 7, 58)",
    hsl: "hsl(293, 78%, 13%)",
  },
} as const;

/**
 * Theme colors mapped to semantic meanings for the Dragon Farm app
 */
export const dragonFarmTheme = {
  // Primary brand colors
  primary: oceanDragonPalette.navy,
  primaryLight: oceanDragonPalette.teal,
  primaryDark: oceanDragonPalette.deepPurple,

  // Accent colors
  accent: oceanDragonPalette.emerald,
  accentDark: oceanDragonPalette.darkPurple,

  // Semantic colors
  success: oceanDragonPalette.emerald,
  info: oceanDragonPalette.teal,
  warning: "#fbbf24", // Complementary yellow for warnings
  danger: "#ef4444", // Red for destructive actions

  // Neutral colors derived from the palette
  background: "#ffffff",
  backgroundDark: oceanDragonPalette.darkPurple.hex,
  surface: "#f8fafc",
  surfaceDark: oceanDragonPalette.deepPurple.hex,

  // Text colors
  textPrimary: oceanDragonPalette.deepPurple.hex,
  textSecondary: oceanDragonPalette.navy.hex,
  textMuted: "#64748b",
  textLight: "#ffffff",
} as const;

/**
 * Tailwind CSS color mappings
 */
export const tailwindColors = {
  "dragon-emerald": oceanDragonPalette.emerald.hex,
  "dragon-teal": oceanDragonPalette.teal.hex,
  "dragon-navy": oceanDragonPalette.navy.hex,
  "dragon-deep-purple": oceanDragonPalette.deepPurple.hex,
  "dragon-dark-purple": oceanDragonPalette.darkPurple.hex,
} as const;
