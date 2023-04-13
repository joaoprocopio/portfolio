import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const tailwindConfig: Config = {
  content: [
    "./components/**/*.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./error.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        mono: [...fontFamily.mono],
        serif: [...fontFamily.serif],
      },
    },
  },
  plugins: [],
}

export default tailwindConfig
