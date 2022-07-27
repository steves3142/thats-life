const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Bank = new Schema(
    {
        name: { type: String, required: true },
        account_types: { type: String, required: true },
        image: { type: String, required: true },
    },
)

module.exports = Bank