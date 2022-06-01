import React from "react";
import { useTranslation } from "react-i18next"

import useFetch from "../hooks/useFetch";
import convertDurationTrack from "../core/functions/convertDurationTrack";

import Loading from "../components/Loading/Loading";
import PlayButton from "../components/Buttons/PlayButton";

const SingleRadio = (props) => {

  const { t } = useTranslation()

  const { id } = props
  const { data: radio, isLoading } = useFetch(`radio/${id}/tracks`)

    if (isLoading) return <Loading />;

    return (
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th></th> 
            <th>{t('trad:title')}</th>
            <th>{t('trad:artist')}</th>
            <th>{t('trad:album')}</th>
            <th>{t('trad:duration')}</th>
            <th> </th>
          </tr>
          {radio.data.map((track, index) => (
            <tr key={track.id}>
              <td>{index + 1}</td>
              <td>
                <img src={track.album.cover_small} alt={track.album.title} />
              </td>
              <td>
                <p>{track.title}</p>
              </td>
              <td>
                <p>{track.artist.name}</p>
              </td>
              <td>
                <p>{track.album.title}</p>
              </td>
              <td>
                <p>{convertDurationTrack(track.duration)}</p>
              </td>
              <td>
                <PlayButton url={track.preview} id={track.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}

export default SingleRadio;
