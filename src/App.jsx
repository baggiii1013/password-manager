import { useState } from "react";
import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import Squares from "./components/ui/Squares";

function App() {

  return (
    <>
    <div className="fixed inset-0 -z-10">
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction='diagonal'
          borderColor='#0cffff99'
          hoverFillColor='#61cdcd99'
        />
      </div>
      <div className="relative z-10">
        <Navbar/>
        <Manager/>
      </div>
    </>
  );
}

export default App;
