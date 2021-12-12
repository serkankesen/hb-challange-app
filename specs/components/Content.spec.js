import React from "react";
import { shallow } from "enzyme";
import Content from "../../src/components/Content";

describe("Content", () => {
    let wrapper;

    beforeEach(() => {
        jest.spyOn(window.localStorage.__proto__, "getItem");
        window.localStorage.__proto__.getItem = jest.fn();
        JSON.parse = jest.fn().mockImplementationOnce(() => [
            {
                id: 1,
                image: "https://productimages.hepsiburada.net/s/44/222-222/10807166631986.jpg",
                title: "OPPO Galaxy M31s 128 GB",
                discountPrice: 24,
                listPrice: 53.58,
                discountRate: 50,
                brand: "OPPO",
                color: "Kırmızı",
            },
        ]);
        wrapper = shallow(<Content />);
    });
    it("should render a <div> tag", () => {
        expect(wrapper.find("div").length).toEqual(2);
    });
    it("should render a <Pagination> element", () => {
        expect(wrapper.find("Pagination").length).toEqual(1);
    });
});
