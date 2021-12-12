import App from "../src/App";
import React from "react";
import { shallow } from "enzyme";

describe("App", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />);
    });
    it("should render a App class", () => {
        expect(wrapper.find(".App").length).toEqual(1);
    });
});
