const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Listing = new Schema(
    {
        name: { type: String, required: true },
        image_url: { type: String, required: true },
        description: { type: String, required: true },
        price_point: { type: String, required: true },
        location: { type: String, required: true },
        cuisine: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('listings', Listing)