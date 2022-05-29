import React, { useState } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// import { useGetAlbumsByArtistQuery } from "../api";
import useFetch from "../hooks/useFetch";

// import fetchAlbumsAction from "../api/fecthAlbumsArtist";

import Loading from "../components/Loading/Loading";
import CardAlbum from "../components/CardAlbum/CardAlbum";

const Albums = (props)  => {

  const { id } = props
  const { data: albums, isLoading } = useFetch(`artist/${id}/albums`)
  const [index, setIndex] = useState(0)

  // constructor(props) {
  //   super(props);
  //   this.state = { index: 0 };
  //   this.handleLeft = this.handleLeft.bind(this);
  //   this.handleRight = this.handleRight.bind(this);
  // }

  // componentDidMount() {
  //   const { fetchAlbums } = this.props;
  //   fetchAlbums(this.props.id);
  // }

  // componentDidUpdate(prevProps) {
  //   if (this.props.id !== prevProps.id) {
  //     const { fetchAlbums } = this.props;
  //     fetchAlbums(this.props.id);
  //   }
  // }

  const handleRight = () => {
    let limit = Math.round(albums.data.length / 2) + 5;
    if (index < limit) {
      let n = index + 1;
      setIndex(n);
      document.getElementById(
        "carousel-albums"
      ).style.transform = `translateX(-${n * (170 + 40)}px)`;
    }
  }
  const handleLeft = () => {
    if (index > 0) {
      let n = index - 1;
      setIndex(n);
      document.getElementById(
        "carousel-albums"
      ).style.transform = `translateX(-${n * (170 + 40)}px)`;
    }
  }


    // const { albums, loading } = this.props;
    if (isLoading) return <Loading />;


    return (
      <React.Fragment>
        <div className="header-carrousel">
          <h2>Albums</h2>
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
            <div className="items-slider" id="carousel-albums">
              {albums.data.map((album) => (
                <CardAlbum key={album.id} album={album} />
              ))}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
}

// const mapStateToProps = (state) => ({
//   loading: state.albumsArtist.loading,
//   error: state.albumsArtist.error,
//   albums: state.albumsArtist.albums,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       fetchAlbums: fetchAlbumsAction,
//     },
//     dispatch
//   );

export default Albums;
