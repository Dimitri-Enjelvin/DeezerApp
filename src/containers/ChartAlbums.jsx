import React, { useState } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// import fetchTopAlbumsAction from "../api/fetchChart";
import { useGetChartAlbumsQuery } from "../api"



import Loading from "../components/Loading/Loading";
import CardAlbum from "../components/CardAlbum/CardAlbum";

const ChartAlbums = (props) => {

  // const { data: albums, isLoading, isFetching, error } = useGetChartAlbumsQuery()
  const { albums } = props 
  const [index, setIndex] = useState(0)

  // constructor(props) {
  //   super(props);
  //   this.state = { index: 0 };
  //   this.handleLeft = this.handleLeft.bind(this);
  //   this.handleRight = this.handleRight.bind(this);
  // }

  // componentDidMount() {
  //   const { fetchTopAlbums } = this.props;
  //   fetchTopAlbums();
  // }

  const handleRight = () => {
    let limit = Math.floor(albums.total / 2) - 1;
    if (index < limit) {
      let n = index + 1;
      setIndex(n);
      document.getElementById(
        "carousel-top-albums"
      ).style.transform = `translateX(-${n * (170 + 40)}px)`;
    }
  }
  const handleLeft = () => {
    if (index > 0) {
      let n = index - 1;
      setIndex(n);
      document.getElementById(
        "carousel-top-albums"
      ).style.transform = `translateX(-${n * (170 + 40)}px)`;
    }
  }

    // const { albums, loading, error } = this.props;

      return (
        <div>
          {/* {error && <span>{error}</span>} */}
          <div className="header-carrousel">
            <h1>Trending Albums</h1>
            <div>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="arrow"
                onClick={handleLeft}
              />
              <FontAwesomeIcon
                icon={faChevronRight}
                className="arrow"
                onClick={handleRight}
              />
            </div>
          </div>
          <section>
            <div className="slider">
              <div className="items-slider" id="carousel-top-albums">
                {albums.data.map((album) => (
                  <CardAlbum key={album.id} album={album} />
                ))}
              </div>
            </div>
          </section>
        </div>
      );
}

// const mapStateToProps = (state) => ({
//   error: state.chart.error,
//   albums: state.chart.top.albums,
//   loading: state.chart.loading,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       fetchTopAlbums: fetchTopAlbumsAction,
//     },
//     dispatch
//   );

export default ChartAlbums;
