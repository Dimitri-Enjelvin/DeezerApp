import React from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

// import fetchArtistsByGenreAction from "../api/fetchArtistsByGenre"
// import { useGetArtistsByGenreQuery } from "../api"
import useFetch from "../hooks/useFetch";

import Loading from "../components/Loading/Loading";
import Card from "../components/CardArtists/Card";

const ArtistsByGenre = (props) => {

  console.log("props", props);
  const { id } = props
  const { data: artists, isLoading } = useFetch(`genre/${id}/artists`) 
  // componentDidMount() {
  //   const { fetchArtists } = this.props;
  //   fetchArtists(this.props.id);
  // }

    // const { artists, loading, error } = this.props;

    if (isLoading) return <Loading />;

      return (
        <React.Fragment>
          {/* {error && <span>{error}</span>} */}
          <h1>Artists</h1>
          <div className="featured-artists">
            {artists.data.map((artist) => (
              <Card key={artist.id} artist={artist} />
            ))}
          </div>
        </React.Fragment>
      );
}

// const mapStateToProps = (state) => ({
//   error: state.artistsByGenre.error,
//   artists: state.artistsByGenre.artists,
//   loading: state.artistsByGenre.loading,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       fetchArtists: fetchArtistsByGenreAction,
//     },
//     dispatch
//   );

export default ArtistsByGenre;
