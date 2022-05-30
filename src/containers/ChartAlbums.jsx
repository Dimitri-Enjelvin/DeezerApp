import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import CardAlbum from "../components/CardAlbum/CardAlbum";

import useScroll from "../hooks/useScroll";

const ChartAlbums = (props) => {

  const { albums } = props  
  const { handleLeft, handleRight } = useScroll("home", "carousel-top-albums")


  const onHandleRight = () => {
    handleRight(albums.total)
  }
  const onHandleLeft = () => {
    handleLeft()
  }


      return (
        <div>
          <div className="header-carrousel">
            <h1>Trending Albums</h1>
            <div>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="arrow"
                onClick={onHandleLeft}
              />
              <FontAwesomeIcon
                icon={faChevronRight}
                className="arrow"
                onClick={onHandleRight}
              />
            </div>
          </div>
          <section>
            <div className="slider">
              <div className="items-slider" id="carousel-top-albums">
                {albums.data.map((album) => (
                  <CardAlbum key={album.id} album={album} />
                ))}
              </div>
            </div>
          </section>
        </div>
      );
}

export default ChartAlbums;
