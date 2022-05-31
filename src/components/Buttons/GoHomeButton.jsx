import React from "react";
import "./GoHomeButton.css";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next"

const GoHomeButton = () => {

  const { t } = useTranslation()
  
  return (
    <Link to="/">
      <button className="go-home-button">{t('trad:goBack')}</button>
    </Link>
  );
};

export default GoHomeButton;
