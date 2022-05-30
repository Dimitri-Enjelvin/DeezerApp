import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import CardAlbum from "../components/CardAlbum/CardAlbum";

const ChartAlbums = (props) => {

  const { albums } = props 
  const [index, setIndex] = useState(0)

  const handleRight = () => {
    let limit = Math.floor(albums.total / 2) - 1;
    if (index < limit) {
      let n = index + 1;
      setIndex(n);
      document.getElementById(
        "carousel-top-albums"
      ).style.transform = `translateX(-${n * (170 + 40)}px)`;
    }
  }
  const handleLeft = () => {
    if (index > 0) {
      let n = index - 1;
      setIndex(n);
      document.getElementById(
        "carousel-top-albums"
      ).style.transform = `translateX(-${n * (170 + 40)}px)`;
    }
  }


      return (
        <div>
          <div className="header-carrousel">
            <h1>Trending Albums</h1>
            <div>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="arrow"
                onClick={handleLeft}
              />
              <FontAwesomeIcon
                icon={faChevronRight}
                className="arrow"
                onClick={handleRight}
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
