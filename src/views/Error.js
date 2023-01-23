import React from "react";
import errorGif from "../assests/gifs/luke-404.webp";

const Error = () => {
  return (
    <div className="error">
      <img src={errorGif} loading="lazy" />
    </div>
  );
};

export default Error;
