import React, { useState } from "react";
import "./FollowButton.css";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { addFavoriteArtist, removeFavoriteArtist } from "../../redux/slice/favoriteSlice";

const FollowButton = (props) => {

  const { artist } = props
  const follower = useSelector((state) => state.favorites.favArtists)
  const dispatch = useDispatch()
  const [toggle, setToggle] = useState(false)

  const handleToogle = () => {

    setToggle((prev) => !prev)

    follower.find((artistSaved) => artistSaved.id === artist.id)
      ? dispatch(removeFavoriteArtist(artist.id))
      : dispatch(addFavoriteArtist(artist));
  };

    return (
      <button
        icon={faHeart}
        className={
          "Follow-Button" +
          (follower.find((artistSaved) => artistSaved.id === artist.id)
            ? " Press"
            : "")
        }
        onClick={handleToogle}
      >
        <FontAwesomeIcon icon={faHeart} />
        <span>
          {follower.find((artistSaved) => artistSaved.id === artist.id)
            ? "Unfollow"
            : "Follow"}
        </span>
        <span className={"Feedback" + (toggle ? " Press" : "")}>
          <FontAwesomeIcon icon={faHeart} />
        </span>
      </button>
    );
}

export default FollowButton;
