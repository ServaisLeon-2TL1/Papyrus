import Product from "./components/Product";
import Cart from "./pages/Cart";
import Home from "./pages/Home"
import ProductList from "./pages/ProductList";
import RegisterNull from "./pages/RegisterNull";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import { Link}  from "react-router-dom"
import { useState, useEffect } from 'react'
import Test from "./pages/Test"
import StripeCheckout from 'react-stripe-checkout'
import Signup from "./components/Signup";
import Flowers from "./components/Flowers";
//import Login from "./components/Login";
import ProductsTest from "../src/components/ProductsTest.js"
import Register from "./components/Register";
import Login from "./components/Login";
import MyInfo from "./components/MyInfo";
import EditStock from "./pages/EditStock";
import MyBunches from "./components/MyBunches";
import MyBunchesContents from "./components/MyBunchesContents";



function App() {

    return(

        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Cart" element={<Cart/>} />
                <Route path="/Login" element={<Login />} />
                <Route path="/ProductList" element={<ProductList />} />
                <Route path="/Test" element={<Test/>} />
                <Route path='/signup' element={<Signup/>}/>

                <Route path="/flowers" element={<Flowers/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/myAccount" element={<MyInfo/>}/>
                <Route path="/myBunches" element={<MyBunches/>}/>
                <Route path="/myBunches/:id/contents" element={<MyBunchesContents/>}/>

                <Route path="/EditStock" element={<EditStock/>}/>
                <Route path="/ProductsTest" component={<ProductsTest/>}/>
            </Routes>
        </Router>
    );

}

export default App;