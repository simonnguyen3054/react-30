import React from "react";
import { mount } from "enzyme";
import AudioSource from "../AudioSource";

let wrapper = null,
  props = {
    src: "sound.wav",
    encoding: "audio/mpeg",
    keyCode: 65,
    handleKeyOnPlayed: jest.fn()
  },
  map = {},
playStub;

beforeEach(() => {
  //stub window.addEventListener such that when it’s invoked (in useEffect) it will create a binding between an event name and a callback.
  window.addEventListener = jest.fn((event, cb) => {
    map[event] = cb;
  });

  //mock the higher-level API for when audio is played
  playStub = jest
    .spyOn(window.HTMLMediaElement.prototype, "play")
    .mockImplementation(() => {});

  wrapper = mount(<AudioSource {...props} />);
});

afterEach(() => {
  //call mockRestore on the stub afterwards (just in case we need it elsewhere in the file).
  playStub.mockRestore();
  wrapper.unmount();
});

describe("AudioSource", () => {
  it("should play a specific drum set on key press", () => {
    //instead of using the Enzyme simulate() method to trigger the event,
    //we can simulate the typing of the any key by executing
    //ensure "keydown" event is a binding which will invoke the callback registered
    map.keydown({ keyCode: 65 });

    expect(props.handleKeyOnPlayed).toHaveBeenCalled();
    expect(playStub).toHaveBeenCalled();
  });
});
