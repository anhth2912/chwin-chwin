// @ts-check

/**
 * @type {import('next-i18next').UserConfig}
 */

// const options = {
//   // @ts-ignore
//   order: ["localStorage", "navigator"],
//   caches: ["localStorage"],
//   lookupLocalStorage: "lang",
// };
module.exports = {
  debug: process.env.APP_ENV === "development",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "bu"],
    localeDetection: true,
  },
  react: {
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p", "b", "span"],
  },
  fallbackLng: ["en", "bu"],
  returnNull: false,
  defaultNS: "common",
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",

  // reloadOnPrerender: process.env.APP_ENV === 'development',
  reloadOnPrerender: true,
  // detection: options,
};
