import React from "react";
import "./PopularGenres.css";
import { Link } from "react-router-dom";

const PopularGenres = () => {
  return (
    <div className="container-popular">
      <h1>Popular</h1>
      <Link to="/genre/116">
        <div className="container-images">
        </div>
        <h2 className="title">
          Rap Music
        </h2>
      </Link>
    </div>
  ); 
};

export default PopularGenres;
