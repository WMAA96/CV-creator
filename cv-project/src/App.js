import React, { Component } from "react";
import Education from "./Components/Education";
import General from "./Components/General";
import Workexp from "./Components/Workexp";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <General />
        <Education />
        <Workexp />
      </div>
    );
  }
}

export default App;
