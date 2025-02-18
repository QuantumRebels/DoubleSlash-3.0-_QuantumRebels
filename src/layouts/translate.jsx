import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || "en");

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "hi" : "en";
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
    localStorage.setItem("i18nextLng", newLang);
  };

  return (
    <button className="text-white bg-blue-500 w-fit mx-auto px-2 py-1 rounded " onClick={toggleLanguage}>
      {currentLang === "en" ? "Translate to Hindi" : "Translate to English"}
    </button>
  );
};

export default LanguageSwitcher;
