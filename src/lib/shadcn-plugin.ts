import plugin from "tailwindcss/plugin";

export const shadcnPlugin = plugin(
  function ({ addBase }) {
    addBase({
      ":root": {
        "--background": "272 2% 11%", // #1b1a1d
        "--foreground": "0 0% 100%",
        "--card": "267 3% 16%",
        "--card-foreground": "0 0% 100%",
        "--popover": "267 3% 16%",
        "--popover-foreground": "0 0% 100%",
        "--primary": "0 0% 98%",
        "--primary-foreground": "267 3% 16%",
        "--secondary": "240 4% 28%",
        "--secondary-foreground": "0 0% 98%",
        "--muted": "0 0% 15%",
        "--muted-foreground": "0 0% 60%",
        "--accent": "12 13% 70%", // #c1a9a0
        "--accent-foreground": "0 0% 100%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "240 4% 28%",
        "--input": "240 4% 28%",
        "--ring": "12 13% 70%", // #c1a9a0
        "--radius": "0.5rem",
      },
    });
  }
);
