import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import useQuery from "../hooks/useQuery"

import HintResults from "../components/SearchResults/HintResults";
import ToogleTheme from "../components/Buttons/Toggle";

const SearchBar = () => {

  const { tracks, isLoading, query, setQuery } = useQuery()


  useEffect(() => {
    window.addEventListener("click", function (e) {
      if (document.getElementById("hint-container")) {
        document.getElementById("hint-container").style.display = "none";
      }
    });
  
    return () => {
      window.removeEventListener("click", function (e) {
        if (document.getElementById("hint-container")) {
          document.getElementById("hint-container").style.display = "none";
        }
      })
    }
  }, [query])
  

  const handleChange = (e) => {
    let query = e.target.value;
    setQuery(query)

    if(query.length > 0) {
      document.getElementById("hint-container").style.display = "block";
    } else {
      document.getElementById("hint-container").style.display = "none";
    }
  }

  
    if (isLoading) {
      return (
        <div className="search-container">
          <form>
            <FontAwesomeIcon className="icon-search" icon={faSearch} />
            <input
              type="text"
              placeholder="Search Artist, Albums, Songs"
              onChange={handleChange}
            />
          </form>
          <ToogleTheme />
        </div>
      );
    }



    return (
      <div className="search-container">
        <form>
          <FontAwesomeIcon className="icon-search" icon={faSearch} />
          <input
            type="text"
            placeholder="Search Artist, Albums, Songs"
            onChange={handleChange}
          />
          <HintResults
            songsFound={tracks}
          />
        </form>
        <ToogleTheme />
      </div>
    );
}


export default SearchBar;
