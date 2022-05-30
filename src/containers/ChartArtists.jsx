import React from "react";

import Card from "../components/CardArtists/Card";

const ChartArtists = (props) => {

  const { artists } = props

      return (
        <React.Fragment>
          <h1>Featured Artists</h1>
          <div className="featured-artists">
            {artists.data.map((artist) => (
              <Card key={artist.id} artist={artist} />
            ))}
          </div>
        </React.Fragment>
      );
}

export default ChartArtists;
