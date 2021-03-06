import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next"


import NotesEmoji from "../assets/songs/multiple-musical-notes.png";
import NotYet from "../components/Others/NotYet";
import CardSong from "../components/CardTracks/CardSong";

const YourSongs = () => {

  const { t } = useTranslation()

  const favoritesSongs = useSelector((state) => state.favorites.favSongs)


    return (
      <React.Fragment>
        <h1>{t('trad:yourSongs')}</h1>
        <div className="top-songs-container">
          {favoritesSongs.length === 0 || favoritesSongs === null ? (
            <NotYet
              type="songs"
              imgSrc={NotesEmoji}
            />
          ) : (
            favoritesSongs.map((track) => (
              <CardSong key={track.id} song={track} />
            ))
          )}
        </div>
      </React.Fragment>
    );
}

export default YourSongs;
