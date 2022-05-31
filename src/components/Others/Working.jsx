import React from "react";
import "./Working.css";
import ManConstruction from "../../assets/Man_Construction_Worker.png";
import GoHomeButton from "../Buttons/GoHomeButton";

import { useTranslation } from "react-i18next";

const Working = () => {

  const { t } = useTranslation()

  return (
    <div className="working-container">
      <img src={ManConstruction} alt="Man Construction Worker" />
      <h2>{t('trad:underConstruction')}</h2>
      <p>{t('trad:currentlyWorking')}</p>
      <GoHomeButton />
    </div>
  );
};

export default Working;
