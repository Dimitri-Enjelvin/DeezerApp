import React, { useEffect } from "react";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import useQuery from "../hooks/useQuery"

// import fetchSearchArtistAction from "../api/fetchSearchArtists";
// import fetchSearchAlbumsAction from "../api/fetchSearchAlbums";
// import fetchSearchTracksAction from "../api/fetchSearchTracks";
// import { useGetSearchAlbumsQuery, useGetSearchArtistsQuery, useGetSearchTracksQuery } from "../api"

import HintResults from "../components/SearchResults/HintResults";
import ToogleTheme from "../components/Buttons/Toggle";

const SearchBar = () => {

  const { tracks, isLoading, query, setQuery } = useQuery()


  useEffect(() => {
    window.addEventListener("click", function (e) {
      if (document.getElementById("hint-container")) {
        document.getElementById("hint-container").style.display = "none";
      }
    });
  
    return () => {
      window.removeEventListener("click", function (e) {
        if (document.getElementById("hint-container")) {
          document.getElementById("hint-container").style.display = "none";
        }
      })
    }
  }, [query])
  

  const handleChange = (e) => {
    let query = e.target.value;
    setQuery(query)

    if(query.length === 0) {
      document.getElementById("hint-container").style.display = "none";
    }
  }

  
    if (isLoading) {
      return (
        <div className="search-container">
          <form>
            <FontAwesomeIcon className="icon-search" icon={faSearch} />
            <input
              type="text"
              placeholder="Search Artist, Albums, Songs"
              onChange={handleChange}
            />
          </form>
          <ToogleTheme />
        </div>
      );
    }



    return (
      <div className="search-container">
        <form>
          <FontAwesomeIcon className="icon-search" icon={faSearch} />
          <input
            type="text"
            placeholder="Search Artist, Albums, Songs"
            onChange={handleChange}
          />
          <HintResults
            songsFound={tracks}
          />
        </form>
        <ToogleTheme />
      </div>
    );
}


export default SearchBar;
