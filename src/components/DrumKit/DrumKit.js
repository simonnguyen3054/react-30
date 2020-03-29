import React, { useEffect, useState } from "react";
import { data as Data } from "./data";
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

const AudioSauce = ({
  src,
  encoding = "audio/mpeg",
  keyCode,
  handleKeyOnPlayed
}) => {
  const ref = React.useRef();
  useEffect(() => {
    window.addEventListener("keydown", onKeyPress);
  });

  const onKeyPress = event => {
    if (keyCode === event.keyCode) {
      const audio = ref.current;
      handleKeyOnPlayed(event.keyCode); //return the keyCode that's playing
      audio.currentTime = 0; //rewind to the start
      return playAudio(audio);
    }
  };

  //handle Promise resulting from audio.play()
  async function playAudio(audio) {
    try {
      await audio.play();
    } catch (err) {
      console.log(err);
    }
  }

  return <audio src={src} ref={ref} type={encoding}></audio>;
};

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
  const [keyCode, setKeyCode] = useState();

  return (
    <div className="drumkit_background">
      <div className="keys">
        {Data.map((item, i) => (
          <div
            key={item.key}
            className={clsx("key", keyCode === item.key && "playing")}
          >
            <kbd>{item.letter}</kbd>
            <span className="sound">{item.type}</span>
            <AudioSauce
              keyCode={item.key}
              src={audioHashMap[item.type]}
              handleKeyOnPlayed={keyCode => setKeyCode(keyCode)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrumKit;
