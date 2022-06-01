import React from "react";
import { useTranslation } from "react-i18next"
import "./Working.css";

const NotYet = ({ type, imgSrc }) => {

  const { t } = useTranslation ()

  if(type === "artists") {
    return (
      <div className="working-container">
          <img className="scale" src={imgSrc} alt="Singer" />
          <h2>{t('trad:noFavArtists')}</h2>
          <p>{t('trad:noFavArtistsText')}</p>
    </div>
    )
  }
  if(type === 'songs') {
    return (
      <div className="working-container">
        <img className="scale" src={imgSrc} alt="Singer" />
        <h2>{t('trad:noFavSongs')}</h2>
        <p>{t('trad:noFavSongsText')}</p>
      </div>
    )
  }
};

export default NotYet;
