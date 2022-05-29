import React, { useState } from "react";
import "./FollowButton.css";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

// import {
//   actionAddFollower,
//   actionRemoveFollower,
// } from "../../state/favorites/favoriteAction";

import { addFavoriteArtist, removeFavoriteArtist } from "../../redux/slice/favoriteSlice";

const FollowButton = (props) => {

  const { artist } = props
  const follower = useSelector((state) => state.favorites.favArtists)
  const dispatch = useDispatch()
  const [toggle, setToggle] = useState(false)
  // constructor(props) {
  //   super(props);
  //   this.state = { toggle: false };
  //   this.handleToogle = this.handleToogle.bind(this);
  // }

  const handleToogle = () => {
    // const { artist, addFollower, removeFollower, follower } = this.props;

    // this.setState((state) => ({ toggle: !state.toggle }));
    setToggle((prev) => !prev)

    follower.find((artistSaved) => artistSaved.id === artist.id)
      ? dispatch(removeFavoriteArtist(artist.id))
      : dispatch(addFavoriteArtist(artist.id));
  };

    // const { artist, follower } = this.props;

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

// const mapStateToProps = (state) => ({
//   follower: state.favorites.followingArtists,
// });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addFollower: (data) => dispatch(actionAddFollower(data)),
//     removeFollower: (data) => dispatch(actionRemoveFollower(data)),
//   };
// };

export default FollowButton;
