import React, { useState } from 'react';
import styled from "styled-components";
import lila_purple from '../img/ref1.png'
import rose_bleu from '../img/ref3.png'
import rose_orange from '../img/ref5.png'
import rose_rose from '../img/ref6.png'
import rose_jaune from '../img/ref4.png'
import mimosa_jaune from '../img/ref8.png'
import '../styles_cart/cart.css'
import { Link } from 'react-router-dom';


export default function Products({ setCart, cart }) {
    const[products] = useState([
        {
            ref: 1,
            name: "lilac",
            color: "purple",
            prix: 4.50,
            stock: 25,
            image :lila_purple,
        },
        {
            ref: 2,
            name: "rose",
            color: "red",
            prix: 3.50,
            stock: 20,
        },
        {
            ref: 3,
            name: "rose bleue",
            color: "blue",
            prix: 3.50,
            stock: 22,
            image :rose_bleu,
        },
        {
            ref: 4,
            name: "rose",
            color: "yellow",
            prix: 3.50,
            stock: 23,
            image :rose_jaune,
        },
        {
            ref: 5,
            name: "rose",
            color: "orange",
            prix: 3.50,
            stock: 15,
            image :rose_orange,
        },
        {
            ref: 6,
            name: "rose",
            color: "pink",
            prix: 3.50,
            stock: 10,
            image :rose_rose,
        },
        {
            ref: 8,
            name: "mimosa",
            color: "yellow",
            prix: 3.75,
            stock: 17,
            image: mimosa_jaune,
        },

        {
            ref: 10,
            name: "nasturtium",
            color: "yellow",
            prix: 2.75,
            stock: 12,
        },

    ]);

    const ajouter_au_panier = (product) => {
        let nouveau_panier = [...cart];
        let article_dans_panier = nouveau_panier.find(
            (item) => product.name === item.name
        );
        if (article_dans_panier ) {
            article_dans_panier.quantite++;
        } else {
            article_dans_panier  = {
                ...product,
                quantite: 1,
            };
            nouveau_panier.push(article_dans_panier );
        }
        setCart(nouveau_panier);
    };



    const Button = styled.button`
 
  --c: goldenrod;
  color: var(--c);
  font-size: 16px;
  border: 0.3em solid var(--c);
  border-radius: 0.5em;
  width: 12em;
  height: 3em;
  text-transform: uppercase;
  font-weight: bold;
  font-family: sans-serif;
  letter-spacing: 0.1em;
  text-align: center;
  line-height: 3em;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: 0.5s;
  margin: 1em;
`;


    return (
        <>
            <h1>Nos Fleurs</h1>
            <div className="product">
                {products.map((product, idx) => (
                    <div className="product" key={idx}>
                        <h3>{product.name}</h3>
                        <h4>{product.prix}  €</h4>
                        <img src={product.image} alt={product.name} />
                        <button onClick={() => ajouter_au_panier(product)}>
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}