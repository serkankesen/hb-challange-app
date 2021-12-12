export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT_TO_CART = "REMOVE_PRODUCT_TO_CART";
export const FILTER_PRODUCT_BY_COLOR = "FILTER_PRODUCT_BY_COLOR";
export const FILTER_PRODUCT_BY_BRAND = "FILTER_PRODUCT_BY_BRAND";
export const ORDER_PRODUCTS_ASC = "ORDER_PRODUCTS_ASC";
export const ORDER_PRODUCTS_DESC = "ORDER_PRODUCTS_DESC";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const ON_PAGE_CHANGE = "ON_PAGE_CHANGE";

//Add to basket
const addProductToCart = (product, state) => {
    const updatedCart = [...state.cart];
    updatedCart.push({ ...product });
    return { ...state, cart: updatedCart };
};

//Remove from basket
const removeProductToCart = (id, state) => {
    const updatedCart = [...state.cart];
    const index = updatedCart.findIndex((product) => product.id === id);
    updatedCart.splice(index, 1);
    return { ...state, cart: updatedCart };
};

const filterProductByColor = (color, state) => {
    const updatedProducts = [...JSON.parse(localStorage.getItem("products"))];
    const filteredProducts = updatedProducts.filter((product) =>
        product.color.includes(color)
    );
    return { ...state, products: filteredProducts };
};

const filterProductByBrand = (brand, state) => {
    const updatedProducts = [...JSON.parse(localStorage.getItem("products"))];
    const filteredProducts = updatedProducts.filter(
        (product) => product.brand === brand
    );
    return { ...state, products: filteredProducts };
};

const orderProductAsc = (order, state) => {
    const updatedProducts = [...JSON.parse(localStorage.getItem("products"))];
    const orderedProducts = updatedProducts.sort((a, b) => {
        if (a[order] < b[order]) {
            return -1;
        }
        if (a[order] > b[order]) {
            return 1;
        }
        return 0;
    });
    return { ...state, products: orderedProducts };
};

const orderProductDesc = (order, state) => {
    const updatedProducts = [...JSON.parse(localStorage.getItem("products"))];
    const orderedProducts = updatedProducts.sort((a, b) => {
        if (a[order] > b[order]) {
            return -1;
        }
        if (a[order] < b[order]) {
            return 1;
        }
        return 0;
    });
    return { ...state, products: orderedProducts };
};

const searhProduct = (search, state) => {
    const searchProduct = [...JSON.parse(localStorage.getItem("products"))];
    if (search === "") {
        return { ...state, products: searchProduct };
    }
    const filteredProducts = searchProduct.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );
    return { ...state, products: filteredProducts };
};

const onProductPageChange = (pageSize, dataLimit = 12, state) => {
    const updatedProducts = [...JSON.parse(localStorage.getItem("products"))];
    const startIndex = (pageSize - 1) * dataLimit;
    const endIndex = startIndex + dataLimit;
    const filteredProducts = updatedProducts.slice(startIndex, endIndex);
    return { ...state, products: filteredProducts };
};

export const shopReducer = (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return addProductToCart(action.product, state);
        case REMOVE_PRODUCT_TO_CART:
            return removeProductToCart(action.id, state);
        case FILTER_PRODUCT_BY_COLOR:
            return filterProductByColor(action.color, state);
        case FILTER_PRODUCT_BY_BRAND:
            return filterProductByBrand(action.brand, state);
        case ORDER_PRODUCTS_ASC:
            return orderProductAsc(action.order, state);
        case ORDER_PRODUCTS_DESC:
            return orderProductDesc(action.order, state);
        case SEARCH_PRODUCT:
            return searhProduct(action.search, state);
        case ON_PAGE_CHANGE:
            return onProductPageChange(
                action.pageSize,
                action.dataLimit,
                state
            );
        default:
            return state;
    }
};
