import React, { Component } from "react";
import SearchBar from "./SearchBar";
import "../style.css";
import axios from "axios";
import ImageList from "./ImageList";
import { auth } from "../key";

class App extends Component {
  state = { imageList: [] };
  getPropFromChild = (searchText) => {
    // console.log(searchText);
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: searchText },
        headers: {
          Authorization: auth,
        },
      })
      .then((response) => this.setState({ imageList: response.data.results }));
  };
  render() {
    return (
      <div className="main-app">
        <SearchBar getPropFromChild={this.getPropFromChild} />;
        <ImageList imageList={this.state.imageList} />
      </div>
    );
  }
}
export default App;
