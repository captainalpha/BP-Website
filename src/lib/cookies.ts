import Cookies from "js-cookie";

export const setConsentCookie = () => {
  Cookies.set("bpaasCookieConsent", "true", { expires: 150 });
};

export const hasUserConsented = () => {
  return Cookies.get("bpaasCookieConsent") === "true";
};
