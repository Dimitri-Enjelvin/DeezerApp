import React from "react";
import "./HintResults.css";

import { Link } from "react-router-dom";

import ItemResult from "./ItemResult";

const HintResults = ({ songsFound }) => {

  // if(artistsFound === undefined && albumsFound === undefined && songsFound === undefined) return null
  
  return (
    <div id="hint-container">
      <div>
        <section>
          <h3 className="title-section">Songs</h3>
          {songsFound.data.length > 0 ? (
            songsFound.data.map((track) => (
              <Link to={`/album/${track.album.id}`}>
                <ItemResult
                  key={track.id}
                  text={track.title_short}
                  pic={track.album.cover_small}
                />
              </Link>
            ))
          ) : (
            <div className="error">No Matches Were Found</div>
          )}
        </section>
      </div>
    </div>
  );
};

export default HintResults;
