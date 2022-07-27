const { Bank } = require('../models')

const { Card } = require('../models')

const getAllBanks = async (req, res) => {
  try {
    const banks = await Bank.find({})
    console.log(banks)
    return res.json({ banks })
  } catch (e) {
    return res.send(e.message)
  }
}

module.exports = {
    getAllBanks
}

