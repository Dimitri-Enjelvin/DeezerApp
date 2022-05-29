import React from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

// import fetchTopRadiosAction from "../api/fetchTopRadios";
import useFetch from "../hooks/useFetch"

import Loading from "../components/Loading/Loading";
import StandarCard from "../components/StandardCard/StdCard";

const TopRadios = () => { 

  const { data: radios, isLoading } = useFetch(`radio/top`)
  // componentDidMount() {
  //   const { fetchTopRadios } = this.props;
  //   fetchTopRadios();
  // }

    // const { radios, loading } = this.props;
    if (isLoading) return <Loading />;


    return (
      <React.Fragment>
        <h1>Top Radios</h1>
        <div className="genres-section">
          {radios.data.map((radio) => (
            <StandarCard
              text={radio.title}
              pic={radio.picture_big}
              url={`/radio/${radio.id}`}
            />
          ))}
        </div>
      </React.Fragment>
    );
}
// const mapStateToProps = (state) => ({
//   error: state.topTopRadios.error,
//   radios: state.topTopRadios.radios,
//   loading: state.topTopRadios.loading,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       fetchTopRadios: fetchTopRadiosAction,
//     },
//     dispatch
//   );
export default TopRadios;
