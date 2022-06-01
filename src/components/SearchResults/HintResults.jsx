import React from "react";
import { useTranslation } from "react-i18next";

import "./HintResults.css";

import { Link } from "react-router-dom";

import ItemResult from "./ItemResult";

const HintResults = ({ songsFound }) => {

  const { t } = useTranslation() 
  
  return (
    <div id="hint-container">
      <div>
        <section>
          <h3 className="title-section">{t('trad:tracks')}</h3>
          {songsFound.data.length > 0 ? (
            songsFound.data.map((track) => (
              <Link to={`/album/${track.album.id}`} key={track.id}>
                <ItemResult
                  key={track.id}
                  text={track.title_short}
                  pic={track.album.cover_small}
                />
              </Link>
            ))
          ) : (
            <div className="error">{t('trad:searchFailed')}</div>
          )}
        </section>
      </div>
    </div>
  );
};

export default HintResults;
