import React, { useState, useEffect } from "react";
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

  const { data, func, isLoading, query, setQuery } = useQuery()
  const { albums, artists, tracks } = data
  const { getSearchAlbumsByQuery, getSearchArtistsByQuery, getSearchTracksByQuery } = func
  
  // constructor(props) {
  //   super(props);
  //   this.state = { query: "" };

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSearch = this.handleSearch.bind(this);
  // }
  console.log("albums", albums);
  // console.log("artists", artists)
  // console.log("tracks", tracks)

  useEffect(() => {
    window.addEventListener("click", function (e) {
      // if element exists, then...
      if (document.getElementById("hint-container")) {
        document.getElementById("hint-container").style.display = "none";
      }
    });
  
    return () => {
      window.removeEventListener("click", function (e) {
        // if element exists, then...
        if (document.getElementById("hint-container")) {
          document.getElementById("hint-container").style.display = "none";
        }
      })
    }
  }, [])
  

  const handleSearch = (e) => {
    e.preventDefault();
    // const { searchArtists, searchAlbums, searchTracks } = this.props;
    if (query.length > 3) {
      getSearchArtistsByQuery();
      getSearchAlbumsByQuery();
      getSearchTracksByQuery();
    }
  }

  const handleChange = (e) => {
    let query = e.target.value;
    setQuery(query)

    // const { searchArtists, searchAlbums, searchTracks } = this.props;

    if (query.length > 3) {
      getSearchArtistsByQuery();
      getSearchAlbumsByQuery();
      getSearchTracksByQuery();
    } else {
      if (document.getElementById("hint-container")) {
        document.getElementById("hint-container").style.display = "none";
      }
    }
  }

  // render() {
  //   window.addEventListener("click", function (e) {
  //     // if element exists, then...
  //     if (document.getElementById("hint-container")) {
  //       document.getElementById("hint-container").style.display = "none";
  //     }
  //   });
    // const {
    //   foundArtists,
    //   foundAlbums,
    //   foundTracks,
    //   loadingArtists,
    //   loadingAlbums,
    //   loadingTracks,
    // } = this.props;
    if (isLoading) {
      return (
        <div className="search-container">
          <form onSubmit={handleSearch}>
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
        <form onSubmit={handleSearch}>
          <FontAwesomeIcon className="icon-search" icon={faSearch} />
          <input
            type="text"
            placeholder="Search Artist, Albums, Songs"
            onChange={handleChange}
          />
          {/* <HintResults
            artistsFound={artists}
            albumsFound={albums}
            songsFound={tracks}
          /> */}
        </form>
        <ToogleTheme />
      </div>
    );
  // }
}

// const mapStateToProps = (state) => ({
//   //artists
//   loadingArtists: state.searchArtists.loading,
//   errorArtists: state.searchArtists.error,
//   foundArtists: state.searchArtists.artists,
//   // albums
//   loadingAlbums: state.searchAlbums.loading,
//   errorAlbums: state.searchAlbums.error,
//   foundAlbums: state.searchAlbums.albums,
//   // tracks
//   loadingTracks: state.searchTracks.loading,
//   errorTracks: state.searchTracks.error,
//   foundTracks: state.searchTracks.tracks,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       searchArtists: fetchSearchArtistAction,
//       searchAlbums: fetchSearchAlbumsAction,
//       searchTracks: fetchSearchTracksAction,
//     },
//     dispatch
//   );

export default SearchBar;
