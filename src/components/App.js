import React, { Component } from "react";
import NavBar from "./NavBar";
import PlayList from "./PlayList";
import PlayListForm from "./PlayListForm";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      songTitle: "",
      songArtist: "",
      songNotes: ""
    };
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <PlayListForm
          userName={this.state.userName}
          songTitle={this.state.songTitle}
          songArtist={this.state.songArtist}
          songNotes={this.state.songNotes}
        />
        <PlayList />
      </div>
    );
  }
}

export default App;
