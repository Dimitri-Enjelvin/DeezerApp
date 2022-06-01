import React from "react";
import { useTranslation } from "react-i18next";

import Card from "../components/CardArtists/Card";

const ChartArtists = (props) => {

  const { t } = useTranslation()


  const { artists } = props

      return (
        <React.Fragment>
          <h1>{t('trad:topArtists')}</h1>
          <div className="featured-artists">
            {artists.data.map((artist) => (
              <Card key={artist.id} artist={artist} />
            ))}
          </div>
        </React.Fragment>
      );
}

export default ChartArtists;
