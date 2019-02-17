import React from "react";

import getImage from "./../../utils/getImage";

const Img = ({ id, imgId, onClick }) => {
  const img = require.context("../../img", true);
  return (
    <img
      id={id}
      className="img-responsive gameImg"
      src={img(getImage(imgId))}
      alt=""
      onClick={onClick}
    />
  );
};

export default Img;
