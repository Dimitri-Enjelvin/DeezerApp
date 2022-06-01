import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateSongPlaying } from "../../redux/slice/songSlice"

import "./PlayButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const PlayButton = ({ url, id }) => {

  const isPlaying = useSelector((state) => state.song.songPlaying)
  const [audio] = useState(new Audio(url));
  const dispatch = useDispatch()

  const toggle = () => {

    dispatch(updateSongPlaying(id))

  } 

  useEffect(() => {
    if(isPlaying === id) {
      audio.play()
    } else {
      audio.pause()
    }
  }, [audio, id, isPlaying]);

  return (
    <FontAwesomeIcon
      className="icon-controller"
      icon={isPlaying === id ? faPause : faPlay}
      onClick={toggle}
    />
  );
};

export default PlayButton;
