/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import "../assets/styles/components/sidebar.scss";
import _ from "lodash";
import ShopContext from "../context/shop-context.js";

export default function Sidebar() {
    const context = useContext(ShopContext);
    const productFilterByBrand = (brand) => {
        context.filterProductByBrand(brand);
    };
    const productFilterByColor = (color) => {
        context.filterProductByColor(color);
    };

    const productList = JSON.parse(localStorage.getItem("products")) || [];

    const getBrands = () => {
        const brands =
            productList.length > 0 &&
            _.uniq(productList.map((product) => product.brand));
        return brands.map((brand) => (
            <li key={brand}>
                <a
                    href="#"
                    className="content-label"
                    onClick={() => productFilterByBrand(brand)}
                >
                    {brand}{" "}
                    <span>
                        (
                        {productList.length > 0 &&
                            productList.filter(
                                (product) => product.brand === brand
                            ).length}
                        )
                    </span>
                </a>
            </li>
        ));
    };
    const getColors = () => {
        const colors =
            productList.length > 0 &&
            _.uniq(productList.map((product) => product.color));

        return colors.map((color) => (
            <li key={color}>
                <a
                    href="#"
                    className="content-label"
                    onClick={() => productFilterByColor(color)}
                >
                    {color}{" "}
                    <span>
                        (
                        {productList.length > 0 &&
                            productList.filter(
                                (product) => product.color === color
                            ).length}
                        )
                    </span>
                </a>
            </li>
        ));
    };
    return (
        <div className="sidebar">
            <div className="widget">
                <h6>Renk</h6>
                <ul className="content" key="color">
                    {getColors()}
                </ul>
            </div>
            <div className="widget">
                <h6>Sıralama</h6>
                <ul className="content">
                    <li>
                        <a
                            href="#"
                            className="content-label"
                            onClick={() =>
                                context.orderProductsAsc("discountPrice")
                            }
                        >
                            En Düşük Fiyat
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="content-label"
                            onClick={() =>
                                context.orderProductsDesc("discountPrice")
                            }
                        >
                            En Yüksek Fiyat
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="content-label"
                            onClick={() => context.orderProductsAsc("title")}
                        >
                            En Yeniler (A{">"}Z)
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="content-label"
                            onClick={() => context.orderProductsDesc("title")}
                        >
                            En Yeniler (Z{">"}A)
                        </a>
                    </li>
                </ul>
            </div>
            <div className="widget">
                <h6>Marka</h6>
                <ul className="content" key="brand">
                    {getBrands()}
                </ul>
            </div>
        </div>
    );
}
