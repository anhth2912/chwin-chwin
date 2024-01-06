import { i18n } from "../../next-i18next.config";

const LANG_ITEM_KEY = "LANG_ITEM_KEY";

export const setLang = (lang: string) => {
  if (!lang) return;
  localStorage.setItem(LANG_ITEM_KEY, lang);
};

export const getLang = () => {
  const lang = localStorage.getItem(LANG_ITEM_KEY);

  if (lang !== "en" && lang !== "bu") {
    localStorage.setItem(LANG_ITEM_KEY, i18n.defaultLocale);
    return i18n.defaultLocale;
  }
  return lang;
};
