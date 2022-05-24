import {Fragment, useState, useEffect} from "react";
import './Flowers.css';
import ref1 from '../img/ref1.png';
import ref2 from '../img/ref2.png';
import ref3 from '../img/ref3.png';
import ref4 from '../img/ref4.png';
import ref5 from '../img/ref5.png';
import ref6 from '../img/ref6.png';
import ref7 from '../img/ref7.png';
import ref8 from '../img/ref8.png';
import ref9 from '../img/ref9.png';
import ref10 from '../img/ref10.png';
import ref11 from '../img/ref11.png';
import ref12 from '../img/ref12.png';
import ref13 from '../img/ref13.png';
import ref14 from '../img/ref14.png';
import ref15 from '../img/ref15.png';
import ref16 from '../img/ref16.png';
import ref17 from '../img/ref17.png';
import ref18 from '../img/ref18.png';
import ref19 from '../img/ref19.png';
import ref20 from '../img/ref20.png';
import ref21 from '../img/ref21.png';
import { Link}  from "react-router-dom"
import maison from '../img/maison.png'
import styled from "styled-components";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
                    
let pictures = [ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref20, ref21];


function Flowers() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/v1/flowers")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            
            <>
            <Announcement/>
            <Link to="/"><img src = {maison} /></Link>
            <Navbar/>
           <br/>
           <br/> 
            <div className="flowerItems">
                {items.map(item => (
                    <Fragment key={item.ref}>
                        <div className="flowerItem">
                            <p className="flowerInfos">
                                No_{item.ref}<br/>
                                Flower: {item.name}<br/>
                                Color: {item.color}<br/>
                                Price: {item.price}€<br/>
                                Stock: {item.stock} left
                            </p>
                            <img src={pictures[item.ref - 1]} alt="ref"/>
                            <button>Ajouter au panier</button>
                        </div>
                    </Fragment>
                    
                ))}
                <Footer/>
            </div>
            </>
        );

    }
}




export default Flowers;