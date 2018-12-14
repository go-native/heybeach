import React from "react";
import { baseURL } from "./../../config.json";
import "./ImageThumb.css";

const ImageThumb = ({ image }) => {
  return (
    <div className="image-thumb">
      <img alt={image.name} src={baseURL + "/" + image.url} />
      <div className="image-thumb__name">{image.name}</div>
    </div>
  );
};

export default ImageThumb;
