import React from "react";
import { useTranslation } from "react-i18next"

import useFetch from '../hooks/useFetch'

import Loading from "../components/Loading/Loading";
import CardSong from "../components/CardTracks/CardSong";

const PopularTracks = (props) => {

  const { t } = useTranslation()

  const { id } = props
  const { data: tracks, isLoading } = useFetch(`artist/${id}/top`)


    if (isLoading) return <Loading />;


    return (
      <React.Fragment>
        <h2>{t('trad:popular')}</h2>

        <section className="top-songs-container">
          {tracks.data.map((track) => (
            <CardSong key={track.id} song={track} />
          ))}
        </section>
      </React.Fragment>
    );
}

const isEgal = (prevProps, nextProps) => {

  if (prevProps.id !== nextProps.id) {
        return false
  }

  return true
}


export default React.memo(PopularTracks, isEgal);
