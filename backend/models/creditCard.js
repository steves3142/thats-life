const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Card = new Schema(
    {
        name: { type: String, required: true },
        bank: { type: String, required: true },
        category: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true }
    }
)

module.exports = Card