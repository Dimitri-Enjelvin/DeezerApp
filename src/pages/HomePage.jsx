import React, {useEffect, useState} from "react";
import ChartAlbums from "../containers/ChartAlbums";
import PopularGenres from "../components/PopularGenres/PopularGenres";
import ChartTracks from "../containers/ChartTracks";
import ChartArtists from "../containers/ChartArtists";

import Loading from "../components/Loading/Loading";

import useFetch from "../hooks/useFetch"

const HomePage = () => {

  const { data, isLoading }= useFetch("/chart")
  const { albums, tracks, artists } = data

  console.log("dataaa", data)

  if (isLoading) {
    return (
      <Loading />
    )
  } 
  
  
    return (
      <div className="container-right">
        <ChartAlbums albums={albums} />
        <div className="home-divide">
          <div className="popular-left">
            <PopularGenres />
          </div>
          <div className="popular-right">
            <ChartTracks tracks={tracks} />
          </div>
        </div>
        <ChartArtists artists={artists} />
      </div>
    );
}

export default HomePage;
