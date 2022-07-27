const db = require('../db')
const { Card, Bank } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const creditcards = [
        { name: 'Saphire Preferred', 
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
        name: 'Freedom Flex', bank: 'Chase', category: 'Business', 
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
            account_types: 'checking, savings',
        },
        {
            name: 'Citi',
            account_types: 'checking, savings',
        },
        {
            name: 'Wells Fargo',
            account_types: 'checking, savings',
        },
        {
            name: 'Ally',
            account_types: 'checking, savings',
        },
        {
            name: 'Charles Schwab',
            account_types: 'checking, savings',
        },
        {
            name: 'Capital One',
            account_types: 'checking, savings',
        },
        {
            name: 'Marcus By Goldman Sachs',
            account_types: 'checking, savings',
        },
        {
            name: 'Bank of America',
            account_types: 'checking, savings',
        },
        {
            name: 'American Express',
            account_types: 'checking, savings',
        }


    ]

    await Card.insertMany(creditcards)
    console.log("Created Credit Cards!")

    await Bank.insertMany(banks)
    console.log("Created Banks!")
}
const run = async () => {
    await main()
    db.close()
}

run()