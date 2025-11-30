const mongoose = require("mongoose");
const review = require("./review");
const Schema = mongoose.Schema;
const Review = require("./review.js");

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
    location: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
});

listingSchema.post("findOneAndDelete", async (Listing)=>{
    if(listing){
    await Review.deleteMany({_id : {$in : listingSchema.reviews}});
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;