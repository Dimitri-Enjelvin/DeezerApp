import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import useFetch from "../hooks/useFetch"
import useScroll from "../hooks/useScroll";

import Loading from "../components/Loading/Loading";
import Card from "../components/CardArtists/Card";


const RelatedArtists = (props) => {

  const { id } = props
  const { data: related, isLoading } = useFetch(`artist/${id}/related`) 
  const { handleLeft, handleRight } = useScroll("artist", "carousel-related")


  const onHandleRight = () => {
    handleRight(related.total)
  }
  const onHandleLeft = () => {
    handleLeft()
  }


    if (isLoading) return <Loading />;


    return (
      <React.Fragment>
        <div className="header-carrousel">
          <h2>Fans Also Like</h2>
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
            <div className="items-slider" id="carousel-related">
              {related.data.map((artist) => (
                <Card key={artist.id} artist={artist} />
              ))}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
}

const isEgal = (prevProps, nextProps) => {

  if (prevProps.id !== nextProps.id) {
        return false
  }

  return true
}


export default React.memo(RelatedArtists, isEgal);
