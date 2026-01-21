// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Alten Test Application",
      meta: [
        { name: "description", content: "Category Path Finder Application" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&family=Handjet:wght@400;700&display=swap",
        },
      ],
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@nuxt/eslint", "@nuxt/test-utils", "@nuxt/test-utils/module"],
  css: ["~/assets/css/main.css"],
  ssr: true,
});
