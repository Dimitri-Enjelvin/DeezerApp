import React from "react";
import { useTranslation } from "react-i18next"

import GoHomeButton from "../components/Buttons/GoHomeButton";

const Error = () => {

  const { t } = useTranslation()

  return (
    <div className="container-right">
      <div className="error-container">
        <div className="Error-Title">Oops!</div>
        <h3>{t('trad:error')}</h3>
        <p>{t('trad:errorText')}</p>
        <GoHomeButton />
      </div>
    </div>
  );
};

export default Error;
 