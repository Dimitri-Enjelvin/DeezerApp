import React from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

// import fetchArtistAction from "../api/fecthSingleArtist";
import convertNumber from "../core/functions/convertNumber";

import Loading from "../components/Loading/Loading";
import FollowButton from "../components/Buttons/FollowButton";
// import useFetch from "../hooks/useFetch";
import useGetArtistBio from "../hooks/useGetArtistBio"

const ThisArtist = (props) => {

  const { artist, name } = props

  // const { data: artist, isLoading } = useFetch(`artist/${id}`)
  const { info, isLoading } = useGetArtistBio(name)

  console.log('name', name)
  console.log('info', info)
  // componentDidMount() {   
  //   const idArtist = this.props.id;
  //   const { fetchArtist } = this.props;
  //   fetchArtist(idArtist);
  // }

  // componentDidUpdate(prevProps) {
  //   if (this.props.id !== prevProps.id) {
  //     const { fetchArtist } = this.props;
  //     fetchArtist(this.props.id);
  //   }
  // }

    // const { artist, loading } = this.props;

    if (isLoading) return <Loading />;

    return (
      <div className="header-artist">
        <img src={artist.picture_medium} alt={artist.name} />
        <div className="artist-info">
          <h1>{artist.name}</h1>
          <p>{convertNumber(artist.nb_fan)} Fans</p>
          <FollowButton artist={artist} />
        </div>
        <div className="artist-bio">
          <p>{info}</p>
        </div>
      </div>
    );
}

// const mapStateToProps = (state) => ({
//   loading: state.singleArtist.loading,
//   error: state.singleArtist.error,
//   artist: state.singleArtist.info,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       fetchArtist: fetchArtistAction,
//     },
//     dispatch
//   );

export default ThisArtist;
