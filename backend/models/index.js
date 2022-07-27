const { model } = require('mongoose')
const ParkSchema = require('./creditCard')
const RideSchema = require('./banks')

const Bank = model('Bank', BankSchema)
const Card = model('Card', CardSchema)

module.exports = {
  Bank,
  Card
}