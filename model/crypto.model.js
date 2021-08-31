const mongoose = require("mongoose");

const coinSchema = new mongoose.Schema({
    title: String, 
    description: String,
    image_url: String,
    toUSD: String,
})

const coinModel = mongoose.model('conis_collection' , coinSchema);

module.exports = {
    coinModel
}