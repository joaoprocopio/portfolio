export default defineNuxtConfig({
  app: {
    head: {
      title: "Engenheiro de software e resolvedor de problemas",
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
            "João Procópio é um engenheiro de software que acredita na tecnologia como um caminho para resolver problemas reais",
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
          key: "shortcut icon",
          rel: "shortcut icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
        // TODO: definir a fonte sans e mono do site
      ],
    },
  },
  modules: ["@nuxt/content", "@nuxt/image-edge"],
  css: ["~/assets/styles/index.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  dir: {
    public: "static",
  },
  telemetry: false,
  image: {
    dir: "static/images/",
  },
})
