import React from "react";
import Palette from "./Palette";
import seedPalettes from "./seedPalettes";

function App() {
  return <Palette {...seedPalettes[6]} />;
}

export default App;
