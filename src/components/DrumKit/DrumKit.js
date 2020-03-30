import React, { useEffect, useState, useRef, createRef } from "react";
import { data as Data } from "./data";
import AudioSource from "./AudioSource";
import "./style.scss";
import clsx from "clsx";
import {
  clap,
  boom,
  hihat,
  kick,
  openhat,
  ride,
  snare,
  tink,
  tom
} from "../../assets/sounds";

const DrumKit = () => {
  const audioHashMap = {
    clap,
    boom,
    hihat,
    kick,
    openhat,
    ride,
    snare,
    tink,
    tom
  };
  const keysRef = useRef([]); //create an empty array to store div.keys elements
  const [pressedKeyCode, setPressedKeyCode] = useState();
  useEffect(() => {
    //check when transitionend, remove the classname "playing" from div.key element
    keysRef.current.forEach(key =>
      key.addEventListener("transitionend", removeTransition)
    );
  }, []);
  const removeTransition = event => {
    if (event.propertyName !== "transform") return; //skip if not a transform
    setPressedKeyCode(null);
  };

  return (
    <div className="drumkit_background">
      <div className="keys">
        {Data.map((item, i) => (
          <div
            key={item.key}
            className={clsx("key", pressedKeyCode === item.key && "playing")} //add classname "playing" on a pressed div.key element
            ref={key => (keysRef.current[i] = key)} //assign a list of div.key elements
          >
            <kbd>{item.letter}</kbd>
            <span className="sound">{item.type}</span>
            <AudioSource
              keyCode={item.key}
              src={audioHashMap[item.type]}
              handleKeyOnPlayed={keyCode => setPressedKeyCode(keyCode)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrumKit;
