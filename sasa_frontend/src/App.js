import React, { Component } from "react";

import ReactNumInput from "./Components/react-num-input/react-num-input";

import "./App.css";

// my Components
import Header from "./Components/common/header";
import Home from "./Components/home/home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Home /> */}

        <div style={{ width: "100vw", height: "500px", padding: "75px" }}>
          <ReactNumInput
            customContainerStyle={{ height: "35px", width: "150px" }}
            customButtonStyles={{}}
            customInputStyles={{}}
            customContainerClass=""
            customButtonClass=""
            customInputClass=""
            placeholder="Min"
            step={5}
            min={0}
            max={null}
            value={20}
            onChange={(value) => console.log(value)}
          />
        </div>
      </div>
    );
  }
}

export default App;
