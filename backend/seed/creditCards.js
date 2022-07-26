const db = require('../db')
const creditCard = require('../models/creditCard')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const creditCards = [
        { name: 'Saphire Reserve', bank: 'Chase' , category: 'Airlines', description: `This Chase's premier credit card. `, image: 'https://travelingformiles.com/wp-content/uploads/2021/09/chase-sapphire-reserve-741.jpg' },
        { name: 'Citi Custom Cash', bank: 'Citi', category: 'Cash Back', description: 'This is the Citi Custom Cash card.', image: '' },
        { name: 'Freedom Flex', bank: 'Chase', category: 'Business', description: 'This is the ___ by Chase', image: '' },
        { name: 'Marriot Bonvoy Business', bank: 'American Express', category: 'Hotel', description: 'This is the ___ by America Express', image: '' },   
        { name: 'Marriott Bonvoy Boundless', bank: 'Chase', category: 'Travel', description: 'This is the ___ by chase', image: ' '},
    ]

    await creditCard.insertMany(creditCards)
    console.log("Created some Credit Cards!")
}
const run = async () => {
    await main()
    db.close()
}

run()