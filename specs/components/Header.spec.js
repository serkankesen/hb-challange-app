import React from "react";
import { shallow } from "enzyme";
import Header from "../../src/components/Header";

describe("Header", () => {
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
        wrapper = shallow(<Header />);
    });
    it("should render a <div> tag", () => {
        expect(wrapper.find("div").length).toEqual(3);
    });
    it("should render a <input> element", () => {
        expect(wrapper.find("input").length).toEqual(1);
    });
    it("input placeHolder must be '25 milyon'dan fazla ürün içerisinde ara'", () => {
        expect(wrapper.find("input").props().placeholder).toEqual(
            "25 milyon'dan fazla ürün içerisinde ara"
        );
    });
    it("should render a basket-text innerText must be 'S epetim '", () => {
        expect(wrapper.find(".basket-text").text()).toEqual(" Sepetim ");
    });
    it("when search input handle onChange event", () => {
        expect(wrapper.find("input").props().onChange).toBeDefined();
    });
});
