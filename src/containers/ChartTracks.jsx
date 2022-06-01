import React from "react";
import { useTranslation } from "react-i18next";

import CardSong from "../components/CardTracks/CardSong";

const ChartTracks = (props) => {

  const { t } = useTranslation()


  const { tracks } = props

      return (
        <div>
          <h1>{t('trad:topSongs')}</h1>
          <section className="top-songs-container">
            {tracks.data.slice(0, 6).map((track) => (
              <CardSong key={track.id} song={track} />
            ))}
          </section>
        </div>
      );
}

export default ChartTracks;
