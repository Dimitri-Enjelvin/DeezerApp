import React from "react";

import CardSong from "../components/CardTracks/CardSong";

const ChartTracks = (props) => {

  const { tracks } = props

      return (
        <div>
          <h1>Top Songs</h1>
          <section className="top-songs-container">
            {tracks.data.slice(0, 6).map((track) => (
              <CardSong key={track.id} song={track} />
            ))}
          </section>
        </div>
      );
}

export default ChartTracks;
