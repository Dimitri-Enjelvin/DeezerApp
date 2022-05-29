import React from "react";
import SingleRadio from "../containers/SingleRadio";

import { useParams } from "react-router-dom"


const SingleRadioPage = () => {

  const { id } = useParams()

    return (
      <div className="container-right">
        <SingleRadio id={id} />
      </div>
    );
}

export default SingleRadioPage;
