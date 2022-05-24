import React, { useState } from 'react';
import styled from "styled-components";
import { Link}  from "react-router-dom"
import maison from '../img/maison.png'
import lila_purple from '../img/ref1.png'
import rose_bleu from '../img/ref3.png'
import rose_orange from '../img/ref5.png'
import rose_rose from '../img/ref6.png'
import rose_jaune from '../img/ref4.png'
import mimosa_jaune from '../img/ref8.png'
import StripeCheckout from 'react-stripe-checkout'


const Left = styled.div`
  float: left;
  margin : 20px;
`;

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

    /*function creer_panier(cart){
      let nouveau_panier = [...cart]; //dupliquer et creer un nouveau tableau a partir du tableau actuel
      return nouveau_panier;
    }
    module.exports = creer_panier
  function cloneArray(array){
    return[...array]
  }
  module.exports=cloneArray
  */

    const ajouter_au_panier = (product) => {
        let nouveau_panier = [...cart]; //dupliquer et creer un nouveau tableau a partir du tableau actuel
        let article_dans_panier = nouveau_panier.find(
            (item) => product.name === item.name
        );
        if (article_dans_panier) {
            article_dans_panier.quantite++;
        } else {
            article_dans_panier = {
                ...product,
                quantite: 1,
            };
            console.log(article_dans_panier.ref++)
            nouveau_panier.push(article_dans_panier);
        }
        setCart(nouveau_panier);
    };




    /*const Button = styled.button`
    width: 70%;
    padding : 10px;
    background-color : black;
    color : black;
    font-weight : 600px;
    cursor : pointer;
  `;*/


    return (
        <>
            <Left><Link to="/"><img src = {maison} /></Link></Left>
            <h1>Produits</h1>
            <div className="products">
                {products.map((product, idx) => (
                    <div className="product" key={idx}>
                        <h3>{product.name}</h3>
                        <h4>{product.prix}  €</h4>
                        <img src={product.image} alt={product.name} />
                        <button onClick={() => ajouter_au_panier(product)}>
                            Ajouter au panier
                        </button>
                    </div>
                ))}

            </div>
        </>
    );
}