const axios = require('axios'); 
const { coinModel } = require('../model/crypto.model')

const getApi = (req, res) =>{
    axios.get('https://crypto-explorer.herokuapp.com/crypto-list/').then(response =>{
        res.send(response.data)
    }).catch(err => alert(err));
}

const createFav = (req, res) => {
    const {title, description, image_url, toUSD} = req.body;

    const newCoin = new coinModel ({
        title: title,
        description: description,
        image_url: image_url,
        toUSD: toUSD,
    })

    newCoin.save();

}

const favCrypto = (req, res) => {
    coinModel.find({}, (err, coin) => {
        err ? res.send(err) : res.send(coin);
    })
}

const deleteCoin = (req, res) => {
    const {id} = req.params;

    coinModel.deleteOne({ _id: id} , (err, coin) => {})

    coinModel.find({}, (err, coin) => {
        res.send(coin);
    })
}

const updateCoin = (res,req) => {
    const { id } = req.params;
    const { title, description, image_url, toUSD } = req.body;

    coinModel.findByIdAndUpdate({_id: id}, {
        title: title,
        description: description,
        image_url: image_url,
        toUSD: toUSD,
    },
    { new : true },
    (err, coin) => { res.send(coin)});
}

module.exports = {
    getApi,
    createFav, 
    favCrypto,
    deleteCoin,
    updateCoin
}