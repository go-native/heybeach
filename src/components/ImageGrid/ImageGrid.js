import React, { Component } from "react";
import "./ImageGrid.css";
import ImageThumb from "../ImageThumb/ImageThumb.js";

class ImageGrid extends Component {
  handleScroll = event => {
    const { scrollTop, offsetHeight, scrollHeight } = event.target;
    const margin = 5;
    if (scrollTop + offsetHeight >= scrollHeight - margin) {
      this.props.onFetchNextBeaches();
    }
  };
  render() {
    return (
      <div className="grid-container" onScroll={this.handleScroll}>
        <div className="grid-wrapper">
        {this.props.images.map(i => (
          <ImageThumb key={i.name} image={i} />
        ))}
        </div>
      </div>
    );
  }
}

export default ImageGrid;
