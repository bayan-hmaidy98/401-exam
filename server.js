const express = require('express')
const app = express()
 
const cors = require('cors');

app.use(cors())
app.use(express.json());

require('dotenv').config();

const axios = require('axios');

const PORT = process.env.PORT || 3032


const mongoose = require("mongoose");

mongoose.connect(`${process.env.MONGO_DB_URL}/crypto`,
    { useNewUrlParser: true, useUnifiedTopology: true });

    const {
        getApi,
        createFav,
        favCrypto,
        deleteCoin,
        updateCoin
    } = require('./controller/crypto.controller')

  
app.get('/', 
 function (req, res) { 
  res.send('Hello World') 
})

app.get('/api' ,getApi );
app.post('/createFav' , createFav);
app.get('/favCrypto', favCrypto);
app.delete('/deleteCoin/:id' , deleteCoin);
app.put('/updateCoin/:id' , updateCoin)

app.listen(PORT, () => {
    console.log('listening on port' , PORT);
})