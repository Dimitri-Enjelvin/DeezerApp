import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

import {
  faHome,
  faSearch,
  faBroadcastTower,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <div className="container">
      <section className="sidebar-topics">
        <NavLink exact="true" to="/" className="item" >
          <span>Home</span>
        </NavLink>

        <NavLink exact="true" to="/discover" className="item" >
          <span>Discover</span>
        </NavLink>

        <NavLink exact="true" to="/radio" className="item" >
          <span>Radio</span>
        </NavLink>

        <NavLink exact="true" to="/foryou" className="item" >
          <span>For you</span>
        </NavLink>
      </section>

      {/* your library */}
      <section className="sidebar-library">
        <h4>Your Library</h4>
        <NavLink exact="true" to="/albums" className="item" >
          {/* <FontAwesomeIcon className="icon" icon={faUser} /> */}
          <span>Albums</span>
        </NavLink>

        <NavLink exact="true" to="/artists" className="item" >
          {/* <FontAwesomeIcon className="icon" icon={faUser} /> */}
          <span>Artists</span>
        </NavLink>

        <NavLink exact="true" to="/songs" className="item" >
          {/* <FontAwesomeIcon className="icon" icon={faRecordVinyl} /> */}
          <span>Songs</span>
        </NavLink>

        <NavLink
          exact="true"
          to="/playlists"
          className="item"
          
        >
          {/* <FontAwesomeIcon className="icon" icon={faMusic} /> */}
          <span>Playlists</span>
        </NavLink>
      </section>

      {/* Footer on mobile */}
      <section className="sidebar-mobile">
        <NavLink exact="true" to="/" className="item" >
          <FontAwesomeIcon className="icon" icon={faHome} />
          <span>Home</span>
        </NavLink>

        <NavLink exact="true" to="/discover" className="item" >
          <FontAwesomeIcon className="icon" icon={faSearch} />
          <span>Discover</span>
        </NavLink>

        <NavLink
          exact="true"
          to="/favorites"
          className="item"
          
        >
          <FontAwesomeIcon className="icon" icon={faHeart} />
          <span>Favorites</span>
        </NavLink>

        <NavLink exact="true" to="/radio" className="item" >
          <FontAwesomeIcon className="icon" icon={faBroadcastTower} />
          <span>Radio</span>
        </NavLink>
      </section>
    </div>
  );
};

export default Sidebar;
