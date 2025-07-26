import type { Preview } from "@storybook/react-vite";
import "../src/index.css"; // Import our main CSS with the Ocean Dragon color palette

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dragon-navy",
          value: "#0c366f",
        },
        {
          name: "dragon-deep-purple",
          value: "#23024d",
        },
        {
          name: "gradient",
          value: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        },
      ],
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
