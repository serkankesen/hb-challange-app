import React, { useReducer } from "react";
import ShopContext from "./shop-context";
import {
    shopReducer,
    ADD_PRODUCT,
    REMOVE_PRODUCT_TO_CART,
    FILTER_PRODUCT_BY_COLOR,
    FILTER_PRODUCT_BY_BRAND,
    ORDER_PRODUCTS_ASC,
    ORDER_PRODUCTS_DESC,
    SEARCH_PRODUCT,
    ON_PAGE_CHANGE,
} from "./reducers";

const GlobalState = (props) => {
    const products = [
        {
            id: 1,
            image: "https://productimages.hepsiburada.net/s/119/1100/110000068434980.jpg",
            title: "Apple iPhone 11",
            discountPrice: 90.85,
            listPrice: 124.1,
            discountRate: 12,
            brand: "Apple",
            color: "Siyah",
        },
        {
            id: 2,
            image: "https://productimages.hepsiburada.net/s/119/222-222/110000068435066.jpg",
            title: "Apple iphone 11 Kırmızı Kılıf",
            discountPrice: 85.85,
            listPrice: 150.0,
            discountRate: 10,
            brand: "Apple",
            color: "Kırmızı",
        },
        {
            id: 3,
            image: "https://productimages.hepsiburada.net/s/119/222-222/110000068435138.jpg",
            title: "Apple telefon",
            discountPrice: 120.85,
            listPrice: 240.0,
            discountRate: 50,
            brand: "Apple",
            color: "Beyaz",
        },
        {
            id: 4,
            image: "https://productimages.hepsiburada.net/s/119/222-222/110000068435120.jpg",
            title: "Apple iphone 11",
            discountPrice: 56,
            listPrice: 86.58,
            discountRate: 12,
            brand: "Apple",
            color: "Uzay Grisi",
        },
        {
            id: 5,
            image: "https://productimages.hepsiburada.net/s/115/400-592/110000063045275.jpg",
            title: "Reeder P13 Blue Max L 2021 64 GB",
            discountPrice: 56,
            listPrice: 86.58,
            discountRate: 12,
            brand: "Reeder",
            color: "Mavi",
        },
        {
            id: 6,
            image: "https://productimages.hepsiburada.net/s/44/222-222/10769576362034.jpg",
            title: "Samsung Galaxy M31s 128 GB",
            discountPrice: 56,
            listPrice: 86.58,
            discountRate: 12,
            brand: "Samsung",
            color: "Mavi",
        },
        {
            id: 7,
            image: "https://productimages.hepsiburada.net/s/119/1100/110000068434980.jpg",
            title: "Apple iPhone 11",
            discountPrice: 90.85,
            listPrice: 124.1,
            discountRate: 12,
            brand: "Apple",
            color: "Siyah",
        },
        {
            id: 8,
            image: "https://productimages.hepsiburada.net/s/119/222-222/110000068435066.jpg",
            title: "Apple iphone 11 Kırmızı Kılıf",
            discountPrice: 85.85,
            listPrice: 150.0,
            discountRate: 10,
            brand: "Apple",
            color: "Kırmızı",
        },
        {
            id: 9,
            image: "https://productimages.hepsiburada.net/s/119/222-222/110000068435138.jpg",
            title: "Apple telefon",
            discountPrice: 120.85,
            listPrice: 240.0,
            discountRate: 50,
            brand: "Apple",
            color: "Beyaz",
        },
        {
            id: 10,
            image: "https://productimages.hepsiburada.net/s/119/222-222/110000068435120.jpg",
            title: "Apple iphone 11",
            discountPrice: 56,
            listPrice: 86.58,
            discountRate: 12,
            brand: "Apple",
            color: "Uzay Grisi",
        },
        {
            id: 11,
            image: "https://productimages.hepsiburada.net/s/115/400-592/110000063045275.jpg",
            title: "Reeder P13 Blue Max L 2021 64 GB",
            discountPrice: 56,
            listPrice: 86.58,
            discountRate: 12,
            brand: "Reeder",
            color: "Mavi",
        },
        {
            id: 12,
            image: "https://productimages.hepsiburada.net/s/44/222-222/10769576362034.jpg",
            title: "Samsung Galaxy M31s 128 GB",
            discountPrice: 56,
            listPrice: 86.58,
            discountRate: 12,
            brand: "Samsung",
            color: "Mavi",
        },
        {
            id: 13,
            image: "https://productimages.hepsiburada.net/s/119/1100/110000068434980.jpg",
            title: "Apple iPhone 11",
            discountPrice: 90.85,
            listPrice: 124.1,
            discountRate: 12,
            brand: "Apple",
            color: "Siyah",
        },
        {
            id: 14,
            image: "https://productimages.hepsiburada.net/s/119/222-222/110000068435066.jpg",
            title: "Apple iphone 11 Kırmızı Kılıf",
            discountPrice: 85.85,
            listPrice: 150.0,
            discountRate: 10,
            brand: "Apple",
            color: "Kırmızı",
        },
        {
            id: 15,
            image: "https://productimages.hepsiburada.net/s/119/222-222/110000068435138.jpg",
            title: "Apple telefon",
            discountPrice: 120.85,
            listPrice: 240.0,
            discountRate: 50,
            brand: "Apple",
            color: "Beyaz",
        },
        {
            id: 16,
            image: "https://productimages.hepsiburada.net/s/119/222-222/110000068435120.jpg",
            title: "Apple iphone 11",
            discountPrice: 56,
            listPrice: 86.58,
            discountRate: 12,
            brand: "Apple",
            color: "Uzay Grisi",
        },
        {
            id: 17,
            image: "https://productimages.hepsiburada.net/s/115/400-592/110000063045275.jpg",
            title: "Reeder P13 Blue Max L 2021 64 GB",
            discountPrice: 56,
            listPrice: 86.58,
            discountRate: 12,
            brand: "Reeder",
            color: "Mavi",
        },
        {
            id: 18,
            image: "https://productimages.hepsiburada.net/s/44/222-222/10769576362034.jpg",
            title: "Samsung Galaxy M31s 128 GB",
            discountPrice: 56,
            listPrice: 86.58,
            discountRate: 12,
            brand: "Samsung",
            color: "Mavi",
        },
        {
            id: 19,
            image: "https://productimages.hepsiburada.net/s/119/1100/110000068434980.jpg",
            title: "Apple iPhone 11",
            discountPrice: 90.85,
            listPrice: 124.1,
            discountRate: 12,
            brand: "Apple",
            color: "Siyah",
        },
        {
            id: 20,
            image: "https://productimages.hepsiburada.net/s/119/222-222/110000068435066.jpg",
            title: "Apple iphone 11 Kırmızı Kılıf",
            discountPrice: 85.85,
            listPrice: 150.0,
            discountRate: 10,
            brand: "Apple",
            color: "Kırmızı",
        },
        {
            id: 21,
            image: "https://productimages.hepsiburada.net/s/119/222-222/110000068435138.jpg",
            title: "Apple telefon",
            discountPrice: 120.85,
            listPrice: 240.0,
            discountRate: 50,
            brand: "Apple",
            color: "Beyaz",
        },
        {
            id: 22,
            image: "https://productimages.hepsiburada.net/s/119/222-222/110000068435120.jpg",
            title: "Apple iphone 11",
            discountPrice: 56,
            listPrice: 86.58,
            discountRate: 12,
            brand: "Apple",
            color: "Uzay Grisi",
        },
        {
            id: 23,
            image: "https://productimages.hepsiburada.net/s/115/400-592/110000063045275.jpg",
            title: "Reeder P13 Blue Max L 2021 64 GB",
            discountPrice: 56,
            listPrice: 86.58,
            discountRate: 12,
            brand: "Reeder",
            color: "Mavi",
        },
        {
            id: 24,
            image: "https://productimages.hepsiburada.net/s/44/222-222/10807166631986.jpg",
            title: "OPPO Galaxy M31s 128 GB",
            discountPrice: 24,
            listPrice: 53.58,
            discountRate: 50,
            brand: "OPPO",
            color: "Kırmızı",
        },
        {
            id: 25,
            image: "https://productimages.hepsiburada.net/s/119/1100/110000068434980.jpg",
            title: "Apple iPhone 11",
            discountPrice: 90.85,
            listPrice: 124.1,
            discountRate: 12,
            brand: "Apple",
            color: "Siyah",
        },
        {
            id: 26,
            image: "https://productimages.hepsiburada.net/s/119/222-222/110000068435066.jpg",
            title: "Apple iphone 11 Kırmızı Kılıf",
            discountPrice: 85.85,
            listPrice: 150.0,
            discountRate: 10,
            brand: "Apple",
            color: "Kırmızı",
        },
        {
            id: 27,
            image: "https://productimages.hepsiburada.net/s/119/222-222/110000068435138.jpg",
            title: "Apple telefon",
            discountPrice: 120.85,
            listPrice: 240.0,
            discountRate: 50,
            brand: "Apple",
            color: "Beyaz",
        },
        {
            id: 28,
            image: "https://productimages.hepsiburada.net/s/119/222-222/110000068435120.jpg",
            title: "Apple iphone 11",
            discountPrice: 56,
            listPrice: 86.58,
            discountRate: 12,
            brand: "Apple",
            color: "Uzay Grisi",
        },
        {
            id: 29,
            image: "https://productimages.hepsiburada.net/s/115/400-592/110000063045275.jpg",
            title: "Reeder P13 Blue Max L 2021 64 GB",
            discountPrice: 56,
            listPrice: 86.58,
            discountRate: 12,
            brand: "Reeder",
            color: "Mavi",
        },
        {
            id: 30,
            image: "https://productimages.hepsiburada.net/s/44/222-222/10769576362034.jpg",
            title: "Samsung Galaxy M31s 128 GB",
            discountPrice: 56,
            listPrice: 86.58,
            discountRate: 12,
            brand: "Samsung",
            color: "Mavi",
        },
        {
            id: 31,
            image: "https://productimages.hepsiburada.net/s/119/1100/110000068434980.jpg",
            title: "Apple iPhone 11",
            discountPrice: 90.85,
            listPrice: 124.1,
            discountRate: 12,
            brand: "Apple",
            color: "Siyah",
        },
        {
            id: 32,
            image: "https://productimages.hepsiburada.net/s/119/222-222/110000068435066.jpg",
            title: "Apple iphone 11 Kırmızı Kılıf",
            discountPrice: 85.85,
            listPrice: 150.0,
            discountRate: 10,
            brand: "Apple",
            color: "Kırmızı",
        },
        {
            id: 33,
            image: "https://productimages.hepsiburada.net/s/119/222-222/110000068435138.jpg",
            title: "Apple telefon",
            discountPrice: 120.85,
            listPrice: 240.0,
            discountRate: 50,
            brand: "Apple",
            color: "Beyaz",
        },
        {
            id: 34,
            image: "https://productimages.hepsiburada.net/s/119/222-222/110000068435120.jpg",
            title: "Apple iphone 11",
            discountPrice: 56,
            listPrice: 86.58,
            discountRate: 12,
            brand: "Apple",
            color: "Uzay Grisi",
        },
        {
            id: 35,
            image: "https://productimages.hepsiburada.net/s/115/400-592/110000063045275.jpg",
            title: "Reeder P13 Blue Max L 2021 64 GB",
            discountPrice: 56,
            listPrice: 86.58,
            discountRate: 12,
            brand: "Reeder",
            color: "Mavi",
        },
        {
            id: 36,
            image: "https://productimages.hepsiburada.net/s/44/222-222/10807010852914.jpg",
            title: "Xiaomi Redmi 9c 64 GB",
            discountPrice: 246,
            listPrice: 300.58,
            discountRate: 12,
            brand: "Xiaomi",
            color: "Siyah",
        },
    ];
    localStorage.setItem("products", JSON.stringify(products));
    // const [cart, setCart] = useState([]);
    const [cartState, dispatch] = useReducer(shopReducer, {
        cart: [],
        products: JSON.parse(localStorage.getItem("products")),
    });

    const filterProductByColor = (color) => {
        dispatch({ type: FILTER_PRODUCT_BY_COLOR, color: color });
    };

    const filterProductByBrand = (brand) => {
        dispatch({ type: FILTER_PRODUCT_BY_BRAND, brand: brand });
    };

    const addProductToCart = (product) => {
        dispatch({ type: ADD_PRODUCT, product: product });
    };

    const removeProductToCart = (id) => {
        dispatch({ type: REMOVE_PRODUCT_TO_CART, id: id });
    };

    const orderProductsAsc = (order) => {
        dispatch({ type: ORDER_PRODUCTS_ASC, order: order });
    };

    const orderProductsDesc = (order) => {
        dispatch({ type: ORDER_PRODUCTS_DESC, order: order });
    };

    const searchProduct = (search) => {
        dispatch({ type: SEARCH_PRODUCT, search: search });
    };

    const onProductPageChange = (pageSize, dataLimit) => {
        dispatch({
            type: ON_PAGE_CHANGE,
            pageSize: pageSize,
            dataLimit: dataLimit,
        });
    };

    return (
        <ShopContext.Provider
            value={{
                products: cartState.products,
                cart: cartState.cart,
                addProductToCart: addProductToCart,
                removeProductToCart: removeProductToCart,
                filterProductByBrand: filterProductByBrand,
                filterProductByColor: filterProductByColor,
                orderProductsAsc: orderProductsAsc,
                orderProductsDesc: orderProductsDesc,
                searchProduct: searchProduct,
                onProductPageChange: onProductPageChange,
            }}
        >
            {props.children}
        </ShopContext.Provider>
    );
};

export default GlobalState;
