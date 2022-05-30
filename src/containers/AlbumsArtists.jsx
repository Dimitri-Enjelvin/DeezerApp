import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import useFetch from "../hooks/useFetch";


import Loading from "../components/Loading/Loading";
import CardAlbum from "../components/CardAlbum/CardAlbum";

const Albums = (props)  => {

  const { id } = props
  const { data: albums, isLoading } = useFetch(`artist/${id}/albums`)
  const [index, setIndex] = useState(0)


  const handleRight = () => {
    let limit = Math.round(albums.data.length / 2) + 5;
    if (index < limit) {
      let n = index + 1;
      setIndex(n);
      document.getElementById(
        "carousel-albums"
      ).style.transform = `translateX(-${n * (170 + 40)}px)`;
    }
  }
  const handleLeft = () => {
    if (index > 0) {
      let n = index - 1;
      setIndex(n);
      document.getElementById(
        "carousel-albums"
      ).style.transform = `translateX(-${n * (170 + 40)}px)`;
    }
  }


    if (isLoading) return <Loading />;


    return (
      <React.Fragment>
        <div className="header-carrousel">
          <h2>Albums</h2>
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
            <div className="items-slider" id="carousel-albums">
              {albums.data.map((album) => (
                <CardAlbum key={album.id} album={album} />
              ))}
            </div>
          </div>
        </section>
      </React.Fragment>
    );

    
}

const isEgal = (prevProps, nextProps) => {

      if (prevProps.id !== nextProps.id) {
            return true
      }

      return false
}


export default React.memo(Albums, isEgal);
