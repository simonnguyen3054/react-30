import React, { useEffect, useRef } from "react";
import "./style.scss";

const AudioSource = ({
  src,
  encoding = "audio/mpeg",
  keyCode,
  handleKeyOnPlayed
}) => {
  const ref = useRef();
  useEffect(() => {
    window.addEventListener("keydown", onKeyPress);
  }, []);

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

export default AudioSource;
