import React from "react";
import { useTranslation } from "react-i18next"

const Songs = () => {

  const { t } = useTranslation()

  return (
    <div className="container-right">
      <h1>{t('trad:popular')}</h1>
      <h1>{t('trad:songs')}</h1>
    </div>
  );
};

export default Songs;
