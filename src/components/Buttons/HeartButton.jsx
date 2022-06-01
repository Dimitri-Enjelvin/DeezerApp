import React, { useState } from "react";
import "./FollowButton.css";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { addFavoriteSong, removeFavoriteSong } from "../../redux/slice/favoriteSlice"

const HeartButton = (props) => {

  const { track } = props
  const favorites = useSelector((state) => state.favorites.favSongs)
  const dispatch = useDispatch()
  const [toggle, setToggle] = useState(false)

  const handleToogle = () => {

    setToggle((prev) => !prev)

    favorites.find((trackSaved) => trackSaved.id === track.id)
      ? dispatch(removeFavoriteSong(track.id))
      : dispatch(addFavoriteSong(track));
  };


    return (
      <div className="Track-Card">
        <FontAwesomeIcon
          icon={faHeart}
          className={
            "Heart" +
            (favorites.find((trackSaved) => trackSaved.id === track.id)
              ? " isFollow"
              : "")
          }
          onClick={handleToogle}
        />
        <span className={"Feedback" + (toggle ? " Press" : "")}>
          <FontAwesomeIcon icon={faHeart} />
        </span>
      </div>
    );
}

export default HeartButton;
