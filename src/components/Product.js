/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../assets/styles/components/product.scss";

export default function Product(props) {
    const {
        title,
        listPrice,
        discountPrice,
        discountRate,
        id,
        brand,
        color,
        image,
    } = props.data;
    const addProductToCart = () => {
        props.context.addProductToCart(props.data);
    };
    return (
        <div className="product" key={id}>
            <div className="product-image">
                <picture>
                    <img src={image} alt={title} />
                </picture>
            </div>
            <div className="product-title">
                <label>{title}</label>
            </div>
            <div className="product-properties">
                <label>
                    <b>Marka : </b>
                    {brand}
                </label>
                <label>
                    <b>Renk :</b>
                    {color}
                </label>
            </div>
            <div className="product-properties">
                <label className="discount-price">
                    <b>{listPrice} TL</b>
                </label>
                <div>
                    <label className="list-price">{discountPrice} TL</label>{" "}
                    <b className="discount-rate"> {discountRate}%</b>
                </div>
            </div>
            <div
                onClick={() =>
                    !props.context.cart.find((x) => x.id === id) &&
                    addProductToCart()
                }
                className={`product-button ${
                    props.context.cart.find((x) => x.id === id)
                        ? "disabled"
                        : ""
                }`}
            >
                {!props.context.cart.find((x) => x.id === id) ? (
                    <a className="add-to-cart">Sepete Ekle</a>
                ) : (
                    <a className="add-to-cart">
                        Bu ürünü sepete ekleyemezsiniz.
                    </a>
                )}
            </div>
        </div>
    );
}

Product.propTypes = {};
