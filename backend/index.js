const express = require('express');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');
const mongoose = require("mongoose");
require('dotenv').config();

const ValorantRoute = require('./routes/Valorant');
const CSRoute = require('./routes/CS');
const WNBARoute = require('./routes/WNBA');
const RainbowRoute = require('./routes/Rainbow');
const TrendingRoute = require('./routes/Trending');
const EsportRoute = require('./routes/Esport');
const PsportRoute = require('./routes/Psport');

const app = express();
app.use(cors());
app.use(express.json());
app.use("/trending", TrendingRoute);
app.use("/cs", CSRoute);
app.use("/valorant", ValorantRoute);
app.use("/wnba", WNBARoute);
app.use('/rainbow', RainbowRoute);
app.use('/esport', EsportRoute);
app.use('/psport', PsportRoute);

app.listen(3001, () => {
    console.log("Server is Running on port 3001");
});