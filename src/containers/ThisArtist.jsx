import React from "react";

import convertNumber from "../core/functions/convertNumber";

import Loading from "../components/Loading/Loading";
import FollowButton from "../components/Buttons/FollowButton";
import useGetArtistBio from "../hooks/useGetArtistBio"

const ThisArtist = (props) => {

  const { artist, name } = props

  const { info, isLoading } = useGetArtistBio(name)


    if (isLoading) return <Loading />;

    return (
      <div className="header-artist">
        <img src={artist.picture_medium} alt={artist.name} />
        <div className="artist-info">
          <h1>{artist.name}</h1>
          <p>{convertNumber(artist.nb_fan)} Fans</p>
          <FollowButton artist={artist} />
        </div>
        <div className="artist-bio">
          <p>{info}</p>
        </div>
      </div>
    );
}

const isEgal = (prevProps, nextProps) => {

  if (prevProps.id !== nextProps.id) {
        return false
  }

  return true
}


export default React.memo(ThisArtist, isEgal);
