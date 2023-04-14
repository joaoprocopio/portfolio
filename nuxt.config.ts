import { fontFamily } from "tailwindcss/defaultTheme"

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "João",
      titleTemplate: "%s - Portfolio",
      htmlAttrs: {
        lang: "pt-BR",
      },
      meta: [
        { charset: "utf-8" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        {
          name: "google-site-verification",
          content: "CpTj0nFGjqN9vZ7yaq_VUPeFFLKQdmjHRpUnZTIMLJ8",
        },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "prefetch",
          as: "style",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap",
        },
        {
          rel: "prefetch",
          as: "style",
          href: "https://fonts.googleapis.com/css2?family=Bitter:wght@400;700;900&display=swap",
        },
        {
          rel: "prefetch",
          as: "style",
          href: "https://fonts.googleapis.com/css2?family=Cousine:wght@400;700&display=swap",
        },
      ],
    },
  },
  experimental: {
    payloadExtraction: false,
  },
  tailwindcss: {
    viewer: false,
    cssPath: "./assets/css/tailwind.css",
    config: {
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
            mono: ["Cousine", ...fontFamily.mono],
            serif: ["Bitter", ...fontFamily.serif],
          },
        },
      },
    },
  },
})
