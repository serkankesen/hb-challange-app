/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import "../assets/styles/components/navigation.scss";
import ShopContext from "../context/shop-context.js";

export default function Navigation() {
    const context = useContext(ShopContext);

    const orderBySelect = (e) => {
        switch (e.target.value) {
            case "1":
                context.orderProductsAsc("discountPrice");
                break;
            case "2":
                context.orderProductsDesc("discountPrice");
                break;
            case "3":
                context.orderProductsAsc("title");
                break;
            case "4":
                context.orderProductsDesc("title");
                break;
            default:
                break;
        }
    };
    return (
        <div className="navigation">
            <div className="search-info">
                <span className="search-text">iPhone iOS cep telefonu</span>
                <span className="searched-text">
                    Aranan Kelime : <a> iphone 11 </a>
                </span>
            </div>
            <div className="product-filter">
                <select
                    className="order"
                    id="selectOrder"
                    onChange={(e) => {
                        orderBySelect(e);
                        document.getElementById(
                            "selectOrder"
                        ).selectedIndex = 0;
                    }}
                >
                    <option value="0">Sıralama</option>
                    <option value="1">En Düşük Fiyat</option>
                    <option value="2">En Yüksek Fiyat</option>
                    <option value="3">En Yeniler (A{">"}Z)</option>
                    <option value="4">En Yeniler (Z{">"}A)</option>
                </select>
            </div>
        </div>
    );
}
