import React from "react";

// import { useGetGenresQuery } from "../api";
import useFetch from "../hooks/useFetch";


import Loading from "../components/Loading/Loading";
import StandarCard from "../components/StandardCard/StdCard";

const Genres = () => {

  const { data: genres, isLoading } = useFetch("/genre")


    if (isLoading) return <Loading />;

    return (
      <React.Fragment>
        <h1>Genres</h1>
          <div className="genres-section">
            {genres.data.slice(1, genres.data.length).map((genre) => (
              <StandarCard
                text={genre.name}
                pic={genre.picture_big}
                url={`/genre/${genre.id}`}
              />
            ))}
          </div>
      </React.Fragment>
    );

}

export default Genres;
