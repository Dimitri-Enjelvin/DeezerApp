import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import useFetch from "../hooks/useFetch";
import useScroll from "../hooks/useScroll"


import Loading from "../components/Loading/Loading";
import CardAlbum from "../components/CardAlbum/CardAlbum";

const Albums = (props)  => {

  const { id } = props
  const { data: albums, isLoading } = useFetch(`artist/${id}/albums`)
  const { handleLeft, handleRight } = useScroll("artist", "carousel-albums")


  const onHandleRight = () => {
    handleRight(albums.data.length)
  }
  const onHandleLeft = () => {
    handleLeft()
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
