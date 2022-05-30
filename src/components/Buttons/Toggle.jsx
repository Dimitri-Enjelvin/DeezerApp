import React from "react";

import useLanguage from "../../hooks/useLanguage"
import useTheme from '../../hooks/useTheme'

import "./Toggle.css";

const ToogleTheme = () => {

  const { handleToggleTheme } = useTheme()
  const { currentLanguage, handleLanguageChange } = useLanguage()

  return (
    <div className="toggles-container">

      <div className="language-switch" onClick={handleLanguageChange}>
        <p id="language">{currentLanguage === 'en' ? "EN" : "FR" }</p>
      </div>

      <div className="toggle" onClick={handleToggleTheme}>
        <div id="swithcher"></div>
      </div>

    </div>
  );

};

export default ToogleTheme;
