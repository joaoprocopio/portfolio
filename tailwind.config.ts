import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
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
        // TODO: definir a fonte sans e mono do site
        sans: [...fontFamily.sans],
        mono: [...fontFamily.mono],
      },
      height: {
        "safe-screen": "calc(100vh - 48px)",
      },
    },
  },
}

export default config
