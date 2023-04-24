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
        // TODO: definir a fonte sans e mono do site
      ],
    },
  },
  modules: ["@nuxt/content"],
  css: ["~/assets/styles/index.css"],
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
