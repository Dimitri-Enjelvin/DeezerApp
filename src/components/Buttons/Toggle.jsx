import React from "react";

import useTheme from '../../hooks/useTheme'

import "./Toggle.css";

const ToogleTheme = () => {

  const { handleToggleTheme } = useTheme()

  return (
    <div className="toggle" onClick={handleToggleTheme}>
      <div id="swithcher"></div>
    </div>
  );

};

export default ToogleTheme;
