/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import Product from "./Product";
import "../assets/styles/components/content.scss";
import ShopContext from "../context/shop-context.js";
import Pagination from "./Pagination";

export default function Content() {
    const context = useContext(ShopContext);
    useEffect(() => {
        const fetchData = () => {
            context.onProductPageChange(1, 12);
        };
        fetchData();
    }, []);

    return (
        <div className="content-info">
            <div className="products">
                {context.products.map((product) => (
                    <Product
                        key={product.id}
                        data={product}
                        context={context}
                    />
                ))}
            </div>
            <Pagination
                totalCount={JSON.parse(localStorage.getItem("products")).length}
                pageSize={12}
            />
        </div>
    );
}
