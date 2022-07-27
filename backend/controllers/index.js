const { Bank } = require('../models')
const { Card } = require('../models')

const createBank = async (req, res) => {
    try {
        const bank = await new Bank(req.body)
        await bank.save()
        return res.status(201).json({
            bank,
        }); 
    } catch (error) {
        throw error 
    }
}

const createCard = async (req, res) => {
    try {
        const card  = await new Bank(req.body)
        await card.save()
        return res.status(201).json({
            card,
        })
    } catch (error) {
        throw error 
    }
}

const getAllBanks = async (req, res) => {
  try {
    const banks = await Bank.find({})
    console.log(banks)
    return res.json({ banks })
  } catch (e) {
    throw error
  }
}

const getAllCards = async (req, res) => {
    try {
      const cards = await Card.find({})
      console.log(cards)
      return res.json({ cards })
    } catch (e) {
      return res.send(e.message)
    }
  }

const getBankById = async (req, res) => {
    try {
        const { id } = req.params; 
        const bank = await Bank.findById(id)
        if (bank) {
            return res.status(200).json({ bank }); 
        }
        return res.status(404).send('Bank with the specified ID does not exist');
    } catch (error) {
        throw error
    }
}

const getCardById = async (req, res) => {
    try {
        const { id } = req.params; 
        const card = await Card.findById(id)
        if (card) {
            return res.status(200).json({ card }); 
        }
        return res.status(404).send('Card with the specified ID does not exist');
    } catch (error) {
        throw error
    }
}


module.exports = {
    createBank,
    createCard,
    getAllBanks, 
    getAllCards, 
    getBankById,
    getCardById
}

//200 good
//404 file not found