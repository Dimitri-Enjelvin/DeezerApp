import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next"

import {
  faHome,
  faSearch,
  faBroadcastTower,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {

  const { t } = useTranslation()

  return (

    // Start of Sidebar 

    <div className="container">
      <section className="sidebar-topics">
        <NavLink exact="true" to="/" className="item" >
          <span>{t('trad:home')}</span>
        </NavLink>

        <NavLink exact="true" to="/discover" className="item" >
          <span>{t('trad:discover')}</span>
        </NavLink> 

        <NavLink exact="true" to="/radio" className="item" >
          <span>{t('trad:radio')}</span>
        </NavLink>

        <NavLink exact="true" to="/foryou" className="item" >
          <span>{t('trad:forYou')}</span>
        </NavLink>
      </section>

      {/* your library */}
      <section className="sidebar-library">
        <h4>{t('trad:yourLibrary')}</h4>
        <NavLink exact="true" to="/albums" className="item" >
          <span>{t('trad:yourAlbums')}</span>
        </NavLink>

        <NavLink exact="true" to="/artists" className="item" >
          <span>{t('trad:yourArtists')}</span>
        </NavLink>

        <NavLink exact="true" to="/songs" className="item" >
          <span>{t('trad:yourSongs')}</span>
        </NavLink>

        <NavLink
          exact="true"
          to="/playlists"
          className="item"
          
        >
          <span>{t('trad:yourPlaylists')}</span>
        </NavLink>
      </section>

      {/* End of Sidebar  */}


      {/* Start of bottom mobile navbar */}
      <section className="sidebar-mobile">
        <NavLink exact="true" to="/" className="item" >
          <FontAwesomeIcon className="icon" icon={faHome} />
          <span>{t('trad:home')}</span>
        </NavLink>

        <NavLink exact="true" to="/discover" className="item" >
          <FontAwesomeIcon className="icon" icon={faSearch} />
          <span>{t('trad:discover')}</span>
        </NavLink>

        <NavLink
          exact="true"
          to="/favorites"
          className="item"
          
        >
          <FontAwesomeIcon className="icon" icon={faHeart} />
          <span>{t('trad:yourFavorites')}</span>
        </NavLink>

        <NavLink exact="true" to="/radio" className="item" >
          <FontAwesomeIcon className="icon" icon={faBroadcastTower} />
          <span>{t('trad:radio')}</span>
        </NavLink>
      </section>
    </div>

    // End of bottom mobile navbar
  );
};

export default Sidebar;
