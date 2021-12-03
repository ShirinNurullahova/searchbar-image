import React from "react";
import ImageListItem from "./ImageListItem";

class ImageList extends React.Component {
  render() {
    return (
      <div className="image-list">
        {this.props.imageList.map((image) => {
          return <ImageListItem imgUrl={image.urls.regular} />;
        })}
      </div>
    );
  }
}

export default ImageList;
