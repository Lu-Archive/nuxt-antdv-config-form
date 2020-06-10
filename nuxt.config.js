module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["ant-design-vue/dist/antd.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: "@/plugins/antd-ui",
      ssr: true
    },
    {
      src: "@/plugins/jj-fn",
      ssr: true
    },
    {
      src: "@/plugins/router",
      ssr: true
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxt/typescript-build"],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/proxy"],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config) {
      config.resolve.alias["vue$"] = "vue/dist/vue.esm.js";
    }
  },
  proxy: {
    "/api": {
      target: "http://192.168.100.206:7300/mock/5e9d0073a8764700201a4553/easyBack"
      // target: 'http://192.168.100.142:80'
    }
  }
};
