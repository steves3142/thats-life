const db = require('../db')
const { Bank, Card } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const cards = [
    { 
        name: 'Saphire Preferred', 
        bank: 'Chase' , 
        category: 'Travel', 
        description: `One of the best starting points into the travel rewards world. Earn 60,000 bonus points after you spend $4,000 on purhcases in the firt 3 months  `, 
        image: 'https://assets-global.website-files.com/61965f8506482fa94e9922c6/61d2ce009c841755534078d9_image%2016.png' 
    },
    { 
        name: 'Citi Custom Cash', 
        bank: 'Citi', 
        category: 'Cash Back', 
        description: 'This Earn $200 Cash back after spending $750 on the card within the first 3 months of account opening', 
        image: 'https://assets-global.website-files.com/61965f8506482fa94e9922c6/61f6626b25301a16f92cf72a_citi%20custom%20cash.png' 
    },
    { 
        name: 'Freedom Flex', 
        bank: 'Chase', 
        category: 'Business', 
        description: 'Earn $50 after you make a purchase within the first 3 months of account opening',
        image: 'https://assets-global.website-files.com/61965f8506482fa94e9922c6/61f6193f5104435e89249f4a_freedom_student_card.png' 
    },
    { 
        name: 'Marriot Bonvoy Business', 
        bank: 'American Express',
        category: 'Hotel', 
        description: 'Earn 125,000 Marriott Bonvoy points after you spend $5,000 on eligible purchases with your new Card within the first 3 months of account opening. Offer expires 8/31/2022.',
        image: 'https://assets-global.website-files.com/61965f8506482fa94e9922c6/61f8616bb71e0f2d4ceb93d5_marriottbusiness.jpg' 
    },   
    { 
        name: 'Marriott Bonvoy Boundless', 
        bank: 'Chase', 
        category: 'Travel', 
        description: 'Earn 3 Free Nights after spending $3,000 on purchases within the first 3 months of account opening; each night valued up to 50,000 points.', 
        image: 'https://assets-global.website-files.com/61965f8506482fa94e9922c6/61f5d5480dc92a05b9c5f5ea_marriott%20boundless.png'
    }
]

    const banks = [
        {
            name: 'Chase',
            accountTypes: 'checking, savings',
            image: 'https://www.creditcards.com/wp-content/uploads/chase-logo.png?v=1590601201'
        },
        {
            name: 'Citi',
            accountTypes: 'checking, savings',
            image: 'https://www.creditcards.com/wp-content/uploads/citi-logo.png?v=1590601201'
        },
        {
            name: 'Wells Fargo',
            accountTypes: 'checking, savings',
            image: 'https://www.creditcards.com/wp-content/uploads/wells-fargo-logo.png?v=1590601263'
        },
        {
            name: 'Ally',
            accountTypes: 'checking, savings',
            image: 'https://media.ally.com/file.php/179264/ALLY_Bank_withRegistration.jpg'
        },
        {
            name: 'Charles Schwab',
            accountTypes: 'checking, savings',
            image: 'https://logos-world.net/wp-content/uploads/2021/03/Charles-Schwab-Emblem.png'
        },
        {
            name: 'Capital One',
            accountTypes: 'checking, savings',
            image: 'https://www.creditcards.com/wp-content/uploads/CapOne-Logo.png?v=1622832589'
        },
        {
            name: 'Marcus By Goldman Sachs',
            accountTypes: 'checking, savings',
            image: 'https://i0.wp.com/www.logotaglines.com/wp-content/uploads/2016/11/Goldman-Sachs-Logo.jpg?resize=365%2C179'
        },
        {
            name: 'Bank of America',
            accountTypes: 'checking, savings',
            image: 'https://www.creditcards.com/wp-content/uploads/bank-of-america-logo.png?v=1590601190'
        },
        {
            name: 'American Express',
            accountTypes: 'checking, savings',
            image: 'https://www.creditcards.com/wp-content/uploads/american-express-logo.png?v=1590601185'
        }


    ]

    await Card.insertMany(cards)
    console.log("Created Credit Cards!")

    await Bank.insertMany(banks)
    console.log("Created Banks!")
}
const run = async () => {
    await main()
    db.close()
}

run()