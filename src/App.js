import React from "react";
import Palette from "./Palette";
import seedPalettes from "./seedPalettes";
import { generatePalette } from "./colorHelpers";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <h1>Palette List</h1>} />
        <Route exact path="/palette/:id" render={() => <h1>Palette ID</h1>} />
      </Switch>
      {/* <div>
        <Palette palette={generatePalette(seedPalettes[6])} />;
      </div> */}
    </Router>
  );
}

export default App;
