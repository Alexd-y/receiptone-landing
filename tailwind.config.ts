import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#FFF9F2",
          100: "#F9EFE5",
          200: "#F1E4D6"
        },
        ink: {
          900: "#0B0B0F",
          800: "#11111A",
          700: "#1A1A24"
        },
        accent: {
          primary: "#0B0B0F",
          secondary: "#10B981"
        }
      },
      boxShadow: {
        soft: "0 12px 30px rgba(0,0,0,0.08)",
        glass: "0 10px 30px rgba(17,17,26,0.08)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
