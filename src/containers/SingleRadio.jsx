import React from "react";

import useFetch from "../hooks/useFetch";
import convertDurationTrack from "../core/functions/convertDurationTrack";

import Loading from "../components/Loading/Loading";
import PlayButton from "../components/Buttons/PlayButton";

const SingleRadio = (props) => {

  const { id } = props
  const { data: radio, isLoading } = useFetch(`radio/${id}/tracks`)

    if (isLoading) return <Loading />;

    return (
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th></th>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Duration</th>
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
