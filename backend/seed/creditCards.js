const db = require('../db')
const creditCard = require('../models/creditCard')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const creditCards = [
        { name: 'Aloe Vera', bank: 'Chase' , description: 'Aloe vera is a succulent plant species of the genus Aloe. An evergreen perennial, it originates from the Arabian Peninsula, but grows wild in tropical, semi-tropical, and arid climates around the world. It is cultivated for agricultural and medicinal uses.', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Aloe_vera_flower_inset.png' },
        { name: 'Snake Plant', bank: 'Citi', description: 'Sansevieria trifasciata is a species of flowering plant in the family Asparagaceae, native to tropical West Africa from Nigeria east to the Congo. It is most commonly known as the snake plant, Saint Georges sword, mother-in-laws tongue, and vipers bowstring hemp, among other names.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg/2560px-Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg' },
        { name: 'Areca palm', bank: 'Capital One', description: 'Dypsis lutescens, also known as golden cane palm, areca palm, yellow palm, or butterfly palm, is a species of flowering plant in the family Arecaceae, native to Madagascar and naturalized in the Andaman...', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Dypsis_lutescens1.jpg/1280px-Dypsis_lutescens1.jpg' },
        { name: 'Spider Plant', bank: 'Wells Fargo', description: 'Chlorophytum comosum, often called spider plant but also known as airplane plant, St. Bernards lily, spider ivy, ribbon plant, and hen and chickens is a species of perennial flowering plant. It is native to tropical and southern Africa, but has become naturalized in other parts of the world, including western Australia.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hierbabuena_0611_Revised.jpg/1920px-Hierbabuena_0611_Revised.jpg' },
        { name: 'Dracaena', bank: 'Discover', description: 'Dracaena is a genus of about 120 species of trees and succulent shrubs. In the APG IV classification system, it is placed in the family Asparagaceae, subfamily Nolinoideae (formerly the family Ruscaceae). It has also formerly been separated (sometimes with Cordyline) into the family Dracaenaceae or placed in the Agavaceae (now Agavoideae).', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Dracaena_draco.jpg' },
    ]

    await creditCard.insertMany(creditCards)
    console.log("Created some Credit Cards!")
}
const run = async () => {
    await main()
    db.close()
}

run()