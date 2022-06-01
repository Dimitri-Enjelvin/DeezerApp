import React from "react";
import "./PopularGenres.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PopularGenres = () => {

  const { t } = useTranslation() 

  return (
    <div className="container-popular">
      <h1>{t('trad:recommendation')}</h1>
      <Link to="/genre/116">
        <div className="container-images" />
        <h2 className="title">
          Rap Music
        </h2>
      </Link>
    </div>
  ); 
};

export default PopularGenres;
