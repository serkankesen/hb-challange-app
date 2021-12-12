/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import logo from "../assets/images/logo.png";
import { Modal } from "./Modal";
import "../assets/styles/components/header.scss";
import ShopContext from "../context/shop-context.js";

export default function Header() {
    const context = useContext(ShopContext);
    const [modal, setModal] = React.useState(false);
    const [modalContent, setModalContent] = React.useState("");

    const removeProductToCart = (id) => {
        setModal(true);
        setModalContent(id);
    };

    const searchByText = (text) => {
        text.target.value.length > 2
            ? context.searchProduct(text.target.value)
            : context.searchProduct("");
    };

    return (
        <React.Fragment>
            <div className="container">
                <a href="#" className="logo">
                    <img src={logo} alt="logo" />
                </a>

                <div className="search">
                    <i className="icon-vector"></i>
                    <input
                        type="text"
                        onChange={(e) => searchByText(e)}
                        placeholder="25 milyon'dan fazla ürün içerisinde ara"
                    />
                </div>

                <div className="basket">
                    <a href="#">
                        <span className="basket-text"> Sepetim </span>
                    </a>
                    {context.cart.length > 0 && (
                        <div className="basket-count">
                            {context.cart.length}
                        </div>
                    )}
                    {context.cart.length > 0 && (
                        <div className="basket-inner">
                            {context.cart.map((cart) => (
                                <div className="basket-list">
                                    <picture>
                                        <img src={cart.image} alt="basket" />
                                    </picture>
                                    <div className="basket-inner-text">
                                        <span>{cart.title}</span>
                                        <a
                                            href="#"
                                            className="remove-basket"
                                            onClick={() =>
                                                removeProductToCart(cart.id)
                                            }
                                        >
                                            Kaldır
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            {modal && (
                <Modal
                    show={true}
                    handleClose={() => setModal(false)}
                    handleConfirm={() => {
                        modalContent &&
                            context.removeProductToCart(modalContent);
                        setModal(false);
                        setModalContent("");
                    }}
                    title="Ürünü silmek istediğinizden emin misiniz?"
                ></Modal>
            )}
        </React.Fragment>
    );
}
