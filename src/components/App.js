import React, { Component } from "react";
import NavBar from "./NavBar";
import PlayList from "./PlayList";
import PlayListForm from "./PlayListForm";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <PlayList />
        <PlayListForm />
      </div>
    );
  }
}

export default App;
