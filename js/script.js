let translations = {};
let currentLang = "en";

const SUPPORTED_LANGS = ["en", "sv", "ko"];

async function loadLanguage(lang, { updateUrl = true } = {}) {
  const res = await fetch(`/locales/${lang}.json`);
  translations = await res.json();
  currentLang = lang;

  applyTranslations();
  localStorage.setItem("lang", lang);

  if (updateUrl) {
    setLangInUrl(lang);
  }
}

function setLangInUrl(lang) {
  const pathParts = window.location.pathname.split("/").filter(Boolean);

  // remove existing lang if present
  if (SUPPORTED_LANGS.includes(pathParts[0])) {
    pathParts.shift();
  }

  // always add new lang
  pathParts.unshift(lang);

  const newPath = "/" + pathParts.join("/");

  if (newPath !== window.location.pathname) {
    window.history.pushState({}, "", newPath);
  }
}

function getLangFromUrl() {
  const firstSegment = window.location.pathname.split("/").filter(Boolean)[0];

  if (SUPPORTED_LANGS.includes(firstSegment)) {
    return firstSegment;
  }

  return localStorage.getItem("lang") || "en";
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[key];
  });
}

// language buttons
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    loadLanguage(btn.dataset.lang);
  });
});

loadLanguage(getLangFromUrl(), { updateUrl: false });
