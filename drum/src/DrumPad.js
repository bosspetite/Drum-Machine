// DrumPad.js
import React, { useEffect, useRef, useCallback } from "react";

function DrumPad({ letter, src, id, setDisplay }) {
  const audioRef = useRef(null);

  const playSound = useCallback(() => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.currentTime = 0;
      audio.play();
      setDisplay(id);
    } else {
      audio.currentTime = 0;
      audio.play();
      setDisplay(id);
    }
  }, [id, setDisplay]); // Dependencies of useCallback

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key.toUpperCase() === letter) {
        playSound();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [letter, playSound]);

  return (
    <button className="drum-pad btn btn-secondary m-2" id={id} onClick={playSound}>
      {letter}
      <audio ref={audioRef} src={src} className="clip" id={letter} />
    </button>
  );
}

export default DrumPad;