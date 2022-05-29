import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

// import fetchTopTracksAction from "../api/fetchChart";
import { useGetChartTracksQuery } from "../api"

import Loading from "../components/Loading/Loading";
import CardSong from "../components/CardTracks/CardSong";

const ChartTracks = (props) => {

  // const { isFetching, error } = useGetChartTracksQuery()
  const { tracks } = props

  // componentDidMount() {
  //   const { fetchTopTracks } = this.props;
  //   fetchTopTracks();
  // }

  useEffect(() => {
    console.log("3")
  }, [])

    // const { tracks, loading, error } = this.props;
    console.log("Track: ", tracks);
    // console.log("tt: ", tracks.tracks);
    // console.log("data: ", tracks.data);
    // console.log('tt', tracks.tracks)
    // console.log('data', tracks.data)

      return (
        <div>
          {/* {error && <span>{error}</span>} */}
          <h1>Top Songs</h1>
          <section className="top-songs-container">
            {tracks.data.slice(0, 6).map((track) => (
              <CardSong key={track.id} song={track} />
            ))}
          </section>
        </div>
      );
}

// const mapStateToProps = (state) => ({
//   error: state.chart.error,
//   tracks: state.chart.top.tracks,
//   loading: state.chart.loading,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       fetchTopTracks: fetchTopTracksAction,
//     },
//     dispatch
//   );

export default ChartTracks;
