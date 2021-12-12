import React from "react";
import { shallow } from "enzyme";
import Product from "../../src/components/Product";

describe("Product", () => {
    let wrapper;

    beforeEach(() => {
        jest.spyOn(window.localStorage.__proto__, "getItem");
        window.localStorage.__proto__.getItem = jest.fn();
        const product = {
            id: 1,
            image: "https://productimages.hepsiburada.net/s/44/222-222/10807166631986.jpg",
            title: "OPPO Galaxy M31s 128 GB",
            discountPrice: 24,
            listPrice: 53.58,
            discountRate: 50,
            brand: "OPPO",
            color: "Kırmızı",
        };
        const cart = [];
        JSON.parse = jest.fn().mockImplementationOnce(() => [product, cart]);

        wrapper = shallow(<Product data={product} context={{ cart: [] }} />);
    });
    it("should render a <div> tag", () => {
        expect(wrapper.find("div").length).toEqual(7);
    });
});
