import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const FavoriteMobilePage = () => {

  const { t } = useTranslation()

    return (
      <div className="container-right">
        
          <Link to="/albums">
            <section className="section-favorite">
              <h1>{t('trad:yourAlbums')}</h1>
            </section>
          </Link>  
        
          <Link to="/artists">        
          <section className="section-favorite">
            <h1>{t('trad:yourArtists')}</h1>        
          </section>
          </Link>

          <Link to="/songs">        
            <section className="section-favorite">
              <h1>{t('trad:yourSongs')}</h1>        
            </section>
          </Link>

          <Link to="/playlists">       
            <section className="section-favorite">
              <h1>{t('trad:yourPlaylists')}</h1>        
            </section>
          </Link>
      </div>
    );
}

export default FavoriteMobilePage;
