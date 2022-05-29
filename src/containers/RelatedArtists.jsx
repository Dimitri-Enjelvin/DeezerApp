import React, { useState } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// import fetchArtistsRelatedAction from "../api/fetchArtistsRelated";
import useFetch from "../hooks/useFetch"

import Loading from "../components/Loading/Loading";
import Card from "../components/CardArtists/Card";

const RelatedArtists = (props) => {

  const { id } = props
  const { data: related, isLoading } = useFetch(`artist/${id}/related`)
  const [index, setIndex] = useState(0)
  // constructor(props) {
  //   super(props);
  //   this.state = { index: 0 };
  //   this.handleLeft = this.handleLeft.bind(this);
  //   this.handleRight = this.handleRight.bind(this);
  // }

  // componentDidMount() {
  //   const { fecthRelated } = this.props;
  //   fecthRelated(this.props.id);
  // }

  // componentDidUpdate(prevProps) {
  //   if (this.props.id !== prevProps.id) {
  //     const { fecthRelated } = this.props;
  //     fecthRelated(this.props.id);
  //   }
  // }

  const handleRight = () => {
    let limit = Math.round(related.total / 2) + 5;
    if (index < limit) {
      let n = index + 1;
      setIndex(n);
      document.getElementById(
        "carousel-related"
      ).style.transform = `translateX(-${n * (170 + 40)}px)`;
    }
  }
  const handleLeft = () => {
    if (index > 0) {
      let n = index - 1;
      setIndex(n);
      document.getElementById(
        "carousel-related"
      ).style.transform = `translateX(-${n * (170 + 40)}px)`;
    }
  }

    // const { related, loading } = this.props;
    if (isLoading) return <Loading />;


    return (
      <React.Fragment>
        <div className="header-carrousel">
          <h2>Fans Also Like</h2>
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
            <div className="items-slider" id="carousel-related">
              {related.data.map((artist) => (
                <Card key={artist.id} artist={artist} />
              ))}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
}

// const mapStateToProps = (state) => ({
//   loading: state.relatedArtists.loading,
//   error: state.relatedArtists.error,
//   related: state.relatedArtists.related,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       fecthRelated: fetchArtistsRelatedAction,
//     },
//     dispatch
//   );

export default RelatedArtists;
