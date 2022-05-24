import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import styled from 'styled-components';


import article_dans_panier from './ProductsTest'
const Button = styled.button`
    width: 20%;
    padding : 10px;
    background-color : black;
    color : white;
    font-weight : 600px;
    cursor : pointer;
`;

const  SummaryTitle= styled.h1`
    font-weight : 200px;
`;


const Summary = styled.div`
    flex:1;
    border:0.5px solid lightgray;
    border-radius:10px;
    padding: 20px;
    height : 50vh;
`;

const SummaryItemText = styled.div`
`;

const SummaryItemPrice = styled.div`
  width:100px:
`;

export default function Cart({ cart, setCart }) {
    const Totel_somme = () => {
        return cart.reduce(
            (sum, { prix, quantite }) => sum + prix * quantite,
            0
        );
    };

    const Rafraichir_panier = () => {
        setCart([]);

    };
    function handleToken(token,addresses){
        console.log(token,addresses);
    }

    const quantite = (product, amount) => {
        const nouveau_panier = [...cart];
        nouveau_panier.find(
            (item) => item.name === product.name
        ).quantite = amount;
        setCart(nouveau_panier);
    };

    const supprimer = (supprimer_produit) => {
        setCart(
            cart.filter((product) => product.ref !== supprimer_produit.ref)
        );

    };

    /*
    const supprimer = (supprimer_produit) => {
      setCart(
        cart.filter((product) => {
          let sup = false;
          var i=0;
          let vrai = true
            while(sup=false && i<cart.length) {
              if (product!==supprimer_produit){
              return true
              }
              else{
                sup = true;
                vrai = false;
              }
              i++
        }
        vrai == true;
        }
        )
        )
      }
    */

    return (
        <>
            <h1>Panier</h1>

            {cart.length > 0 && (
                <button onClick={Rafraichir_panier}>Vider le panier</button>
            )}
            <Summary>
                <SummaryTitle>Votre commande</SummaryTitle>
                <div className="products">
                    {cart.map((product, idx) => (
                        <div className="product" key={idx}>
                            <h3>{product.name}</h3>
                            <h4>€{product.prix}</h4>
                            <input
                                value={product.quantite}
                                onChange={(e) =>
                                    quantite(
                                        product,
                                        parseInt(e.target.value)
                                    )
                                }
                            />
                            <img src={product.image} alt={product.name} />
                            <button onClick={() => supprimer(product)}>
                                Supprimer
                            </button>
                        </div>
                    ))}
                </div>
                <SummaryItemText>
                    <SummaryItemPrice> <div>Prix Total :  €{Totel_somme()}</div></SummaryItemPrice>
                </SummaryItemText>
                <Button>    <div><StripeCheckout
                    stripeKey='pk_test_51KviM6LE7Dqr1SGrErkVWIX3UY5dc0aPlXCGEESupfOyjxJovGymHr94JpJj7aRbVeMxDwG3ksSRIiSKLJkV0JtE00DElQZtJo'
                    token={handleToken}
                    adresse_facturation
                    envoi_facturation
                    montant={Totel_somme()}
                    nom
                />

                </div> </Button>
            </Summary>

        </>
    );
}