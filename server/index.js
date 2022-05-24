const express = require('express');
const app = express();
const cors = require('cors');
const VERSION = "/v1";
const flowersRoute = require('./routes/flowers');
const scheduleRoute = require('./routes/schedule');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const myAccountRoute = require('./routes/myAccount');
const refreshTokenRoute = require('./routes/refreshToken');
const bunchesRoute = require('./routes/bunches');
const ordersRoute = require('./routes/orders');

require('dotenv').config({ path: './.env' });
const PORT = process.env.PORT || 8080;


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["*"],
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use((req, res, next) => {
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET", true);
        return res.status(200).json({});
    }
    next();
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}.`);
});

app.get('/', async (req, res) => {
    res.status(200).send("Welcome to our Papyrus RESTful API!")
});

app.get(VERSION, async (req, res) => {
    res.status(200).send("Welcome to our first version of Papyrus RESTful API!");
});

app.use(`${VERSION}/flowers`, flowersRoute);
app.use(`${VERSION}/schedule`, scheduleRoute);
app.use(`${VERSION}/register`, registerRoute);
app.use(`${VERSION}/login`, loginRoute);
app.use(`${VERSION}/myAccount`, myAccountRoute);
app.use(`${VERSION}/refreshToken`, refreshTokenRoute);
app.use(`${VERSION}/bunches`, bunchesRoute);
app.use(`${VERSION}/orders`, ordersRoute);