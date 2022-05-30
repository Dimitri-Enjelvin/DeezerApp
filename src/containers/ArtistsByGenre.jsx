import React from "react";

import useFetch from "../hooks/useFetch";

import Loading from "../components/Loading/Loading";
import Card from "../components/CardArtists/Card";

const ArtistsByGenre = (props) => {

  console.log("props", props);
  const { id } = props
  const { data: artists, isLoading } = useFetch(`genre/${id}/artists`) 


    if (isLoading) return <Loading />;

      return (
        <React.Fragment>
          <h1>Artists</h1>
          <div className="featured-artists">
            {artists.data.map((artist) => (
              <Card key={artist.id} artist={artist} />
            ))}
          </div>
        </React.Fragment>
      );
}

export default ArtistsByGenre;
