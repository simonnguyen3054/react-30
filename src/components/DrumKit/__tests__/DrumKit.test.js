import React from "react";
import { mount } from "enzyme";
import DrumKit from "../DrumKit";
import AudioSource from "../AudioSource";

let wrapper = null;
const setPressedKeyCode = jest.fn();
const useStateSpy = jest.spyOn(React, "useState");
useStateSpy.mockImplementation(pressedKeyCode => [
  pressedKeyCode,
  setPressedKeyCode
]);

beforeEach(() => {
  wrapper = mount(<DrumKit />);
});

afterEach(() => {
  wrapper.unmount();
});

describe("Drumkit", () => {
  it("should render all drum kits", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
