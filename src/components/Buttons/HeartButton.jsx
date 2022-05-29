import React, { useState } from "react";
import "./FollowButton.css";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

// import {
//   actionAddFavorite,
//   actionRemoveFavorite,
// } from "../../state/favorites/favoriteAction";

import { addFavoriteSong, removeFavoriteSong } from "../../redux/slice/favoriteSlice"

const HeartButton = (props) => {

  const { track } = props
  const favorites = useSelector((state) => state.favorites.favSongs)
  const dispatch = useDispatch()
  const [toggle, setToggle] = useState(false)
  // constructor(props) {
  //   super(props);
  //   this.state = { toggle: false };
  //   this.handleToogle = this.handleToogle.bind(this);
  // }

  const handleToogle = () => {
    // const { track, addFavorites, removeFavorite, favorites } = this.props;
    // this.setState((state) => ({ toggle: !state.toggle }));
    setToggle((prev) => !prev)

    favorites.find((trackSaved) => trackSaved.id === track.id)
      ? dispatch(removeFavoriteSong(track.id))
      : dispatch(addFavoriteSong(track));
  };

    // const { track, favorites } = this.props;

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

// const mapStateToProps = (state) => ({
//   favorites: state.favorites.favoritesSongs,
// });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addFavorites: (data) => dispatch(actionAddFavorite(data)),
//     removeFavorite: (data) => dispatch(actionRemoveFavorite(data)),
//   };
// };

export default HeartButton;
