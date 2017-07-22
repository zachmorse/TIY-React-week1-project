import React, { Component } from "react";
import PlayListItem from "./PlayListItem";

class PlayList extends Component {
  constructor(props) {
    super(props);
    this.state = { songs: [] };
  }

  fetchData = e => {
    e.preventDefault();
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ songs: data });
      });
  };

  ComponentDidMount() {
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ songs: data });
        console.log("state", this.state.songs);
      });
  }

  render() {
    return (
      <div>
        <h1>Hello world, playlist will appear here</h1>

        <PlayListItem />
      </div>
    );
  }
}

export default PlayList;
