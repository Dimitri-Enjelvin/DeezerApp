import React  from "react";
import { useParams } from "react-router-dom"

import ThisArtist from "../containers/ThisArtist";
import Albums from "../containers/AlbumsArtists";
import PopularTracks from "../containers/PopularTracks";
import RelatedArtists from "../containers/RelatedArtists";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading/Loading";

const SingleArtistPage = () => {

  const { id } = useParams()
  const { data: artist, isLoading } = useFetch(`artist/${id}`)


  if (isLoading) return <Loading />;


    return (
      <div className="container-right">
        <ThisArtist artist={artist} name={artist.name} />
        <Albums id={id} />
        <PopularTracks id={id} />
        <RelatedArtists id={id} />
      </div>
    );

}

export default SingleArtistPage;
