import React, { useState } from 'react';
import Products_test from "../components/ProductsTest";
import Cart from "../components/Cart";

import "../styles_cart/cart.css"


const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function Test() {
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(PAGE_PRODUCTS);

    const navigateTo = (nextPage) => {
        setPage(nextPage);
    };

    const getCartTotal = () => {
        return cart.reduce(
            (sum, { quantite }) => sum + quantite,
            0
        );
    };

    return (
        <div className="App">
            <header>
                <button onClick={() => navigateTo(PAGE_CART)}>
                    Aller au panier ({getCartTotal()})
                </button>

                <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
                    Voir les produits
                </button>
            </header>
            {page === PAGE_PRODUCTS && (
                <Products_test cart={cart} setCart={setCart} />
            )}
            {page === PAGE_CART && (
                <Cart cart={cart} setCart={setCart} />
            )}
        </div>
    );
}

export default Test;