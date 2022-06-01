import React from "react";
import { useTranslation } from "react-i18next"
import { Link, useParams } from "react-router-dom";

import useFetch from "../hooks/useFetch"

import convertDurationTrack from "../core/functions/convertDurationTrack";
import convertDurationAlbum from "../core/functions/convertDurationAlbum";
import convertNumber from "../core/functions/convertNumber";
import addProperty from "../core/functions/addProperty";

import Loading from "../components/Loading/Loading";
import PlayButton from "../components/Buttons/PlayButton";
import HeartButton from "../components/Buttons/HeartButton";

const SingleAlbum = () => {

  const { t } = useTranslation()

  const { id } = useParams()
  const { data: album, isLoading } = useFetch(`album/${id}`) 

    if (isLoading) return <Loading />;

    return (
      <div className="container-right">
        <header className="header-album">
          <img src={album.cover_medium} alt={album.title} />
          <section className="info">
            <h1>{album.title}</h1>
            <div className="tags-genres">
              {album.genres.data.map((genre) => (
                <Link to={`/genre/${genre.id}`} key={genre.id}>
                  <p>{genre.name}</p>
                </Link>
              ))}
            </div>
            <div className="details">
              <p>{album.nb_tracks} Songs</p>
              <p id="dot">&bull;</p>
              <p>{convertDurationAlbum(album.duration)}</p>
            </div>
            <p>{convertNumber(album.fans)} Fans</p>
          </section>
        </header>
        <table>
          <thead>
            <tr>
              <th>#</th> 
              <th>{t('trad:title')}</th>
              <th id="duration-header">{t('trad:duration')}</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {album.tracks.data.map((track, index) => (
              <tr key={track.id}>
                <td>{index + 1}</td>
                <td>
                  <p>{track.title}</p>
                </td>
                <td className="duration-field">
                  {convertDurationTrack(track.duration)}
                </td>
                <td>
                  <PlayButton url={track.preview} id={track.id} />
                </td>
                <td>
                  <HeartButton track={addProperty(track, album.cover_small)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}


export default SingleAlbum;
