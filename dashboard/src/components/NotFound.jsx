import React from "react";
import imagenFondo from "../assets/images/Maiurror404.webp";

function NotFound() {
  return (
    <div className="containerNotFound">
      <img
        className="img-fluid px-3 px-sm-4 mt-3 mb-4"
        src={imagenFondo}
        alt="NotFound"
      />
    </div>
  );
}

export default NotFound;
