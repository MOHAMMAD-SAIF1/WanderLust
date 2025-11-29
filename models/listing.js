const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: {
    type: String,
    default: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    set: value => value === "" ? "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" : value
},

    price: Number,
    country: String,
    location: String
});


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;