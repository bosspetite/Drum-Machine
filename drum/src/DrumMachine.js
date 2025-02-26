// DrumMachine.js
import React, { useState } from "react";
import drumPads from "./data";
import DrumPad from "./DrumPad";
import "bootstrap/dist/css/bootstrap.min.css";

function DrumMachine() {
  const [display, setDisplay] = useState("");

  return (
    <div id="drum-machine" className="container text-center mt-5">
      <div id="display" className="alert alert-info">{display}</div>
      <div className="d-flex flex-wrap justify-content-center">
        {drumPads.map((pad) => (
          <DrumPad
            key={pad.id}
            letter={pad.letter}
            src={pad.src}
            id={pad.id}
            setDisplay={setDisplay}
          />
        ))}
      </div>
    </div>
  );
}

export default DrumMachine;