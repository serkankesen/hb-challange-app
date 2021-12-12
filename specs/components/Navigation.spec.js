import React from "react";
import { shallow } from "enzyme";
import Navigation from "../../src/components/Navigation";

describe("Navigation", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Navigation />);
    });
    it("should render a <div> tag", () => {
        expect(wrapper.find("div").length).toEqual(3);
    });
    it("should render a order class", () => {
        expect(wrapper.find(".order").length).toEqual(1);
    });
    it("when search select handle onChange event", () => {
        expect(wrapper.find("select").props().onChange).toBeDefined();
    });
});
