export default defineNuxtConfig({
  app: {
    head: {
      title: "Engenheiro de software e resolvedor de problemas.",
      titleTemplate: "João Procópio: %s",
      htmlAttrs: {
        lang: "pt-BR",
      },
      meta: [
        { charset: "utf-8" },
        {
          hid: "viewport",
          name: "viewport",
          content: "width=device-width, initial-scale=1.0, minimum-scale=1.0",
        },
        {
          hid: "google-site-verification",
          name: "google-site-verification",
          content: "zSPPjtXp_CJ-oYGfkizcdrePI0Vt8tvGefn2msmrC5w",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Sou um engenheiro de software. Eu acredito que a tecnologia pode resolver problemas reais e estou sempre procurando maneiras inovadoras e eficazes para enfrentar esses desafios.",
        },
        { hid: "robots", name: "robots", content: "index, follow" },
      ],
      link: [
        {
          key: "canonical",
          rel: "canonical",
          href: "http://joaoprocopio.github.io/",
        },
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
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
        },
        {
          rel: "prefetch",
          as: "style",
          href: "https://fonts.googleapis.com/css2?family=Chivo+Mono:wght@400;700&display=swap",
        },
      ],
    },
  },
  modules: ["@nuxt/content"],
  css: ["~/assets/styles/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  experimental: {
    payloadExtraction: false,
  },
})
