import React from "react";

class ImageListItem extends React.Component {
  render() {
    return (
      <div className="image-list__item">
        <img src={this.props.imgUrl} alt="img" />
      </div>
    );
  }
}

export default ImageListItem;
