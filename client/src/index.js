import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//const express = require('express');
//import bodyParser from "body-parser";
//const app = express();
//app.use(express.json());
//app.use(bodyParser.json());
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
//const root = ReactDOM.createRoot(document.getElementById('root'));


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals