import React from "react";
import { Link } from "react-router-dom";

const FavoriteMobilePage = () => {
    return (
      <div className="container-right">
        
          <Link to="/albums">
            <section className="section-favorite">
              <h1>Albums</h1>
            </section>
          </Link>  
        
          <Link to="/artists">        
          <section className="section-favorite">
            <h1>Artists</h1>        
          </section>
          </Link>

          <Link to="/songs">        
            <section className="section-favorite">
              <h1>Songs</h1>        
            </section>
          </Link>

          <Link to="/playlists">       
            <section className="section-favorite">
              <h1>Playlists</h1>        
            </section>
          </Link>
      </div>
    );
}

export default FavoriteMobilePage;
