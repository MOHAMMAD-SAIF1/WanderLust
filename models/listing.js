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
  set: (v) => {
    if (v && typeof v === 'object' && v.url) {
      return v.url;
    } 
    return v === "" 
      ? "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
      : v;
  },
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
     owner: {
         type: Schema.Types.ObjectId,
         ref: "user",
     },
});

listingSchema.post("findOneAndDelete", async (listing)=>{
    if(listing){
    await Review.deleteMany({ _id : {$in : listing.reviews}});
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;