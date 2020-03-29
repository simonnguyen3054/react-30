import React, { useEffect } from "react";
import { data as Data } from "./data";
import "./style.scss";
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

const AudioSauce = ({ src, encoding = "audio/mpeg", keyCode }) => {
  const ref = React.useRef();
  useEffect(() => {
    window.addEventListener("keydown", onKeyPress);
  });

  const onKeyPress = event => {
    if (keyCode === event.keyCode) {
      const audio = ref.current;
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

  return (
    <React.Fragment>
      <div className="keys">
        {Data.map((item, i) => (
          <div key={item.key} className="key">
            <kbd>{item.letter}</kbd>
            <span className="sound">{item.type}</span>
            <AudioSauce keyCode={item.key} src={audioHashMap[item.type]} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default DrumKit;
