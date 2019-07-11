import React, { Component } from "react";

import "./App.css";

// my Components
import Header from "./Components/common/header";
import Home from "./Components/home/home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
