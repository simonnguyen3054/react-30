import React from "react";
import { mount } from "enzyme";
import JsAndCssClock from "../JsAndCssClock";

let wrapper = null;
beforeEach(() => {
  wrapper = mount(<JsAndCssClock />);
});

afterEach(() => {
  wrapper.unmount();
});

describe("JsAndCssClock", () => {
  it("should render the clock on the wall", () => {
    expect(wrapper).toMatchSnapshot();
  });
});