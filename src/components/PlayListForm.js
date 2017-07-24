import React, { Component } from "react";

class PlayListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      songArtist: "",
      songTitle: "",
      songNotes: ""
    };
  }

  handleUserName = e => {
    this.setState({ userName: e.target.value });
  };

  handleSongArtist = e => {
    this.setState({ songArtist: e.target.value });
  };

  handleSongTitle = e => {
    this.setState({ songTitle: e.target.value });
  };

  handleSongNotes = e => {
    this.setState({ songNotes: e.target.value });
  };

  addToList = e => {
    e.preventDefault();
    this.setState({
      userName: e.target.value,
      songTitle: e.target.value,
      songArtist: e.target.value,
      songNotes: e.target.value
    });
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log(response, "yay");
      })
      .catch(err => {
        console.log(err, "boo!");
      });
    this.setState({
      userName: "",
      songNotes: "",
      songArtist: "",
      songTitle: ""
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Name or Username"
            onChange={this.handleUserName}
            value={this.state.userName}
          />
          <input
            type="text"
            placeholder="Enter Band/Artist"
            onChange={this.handleSongArtist}
            value={this.state.songArtist}
          />
          <input
            type="text"
            placeholder="Song Title"
            onChange={this.handleSongTitle}
            value={this.state.songTitle}
          />
          <input
            type="text"
            placeholder="Song Notes"
            onChange={this.handleSongNotes}
            value={this.state.songNotes}
          />
          <input type="submit" onClick={this.addToList} />
        </form>
      </div>
    );
  }
}

export default PlayListForm;
