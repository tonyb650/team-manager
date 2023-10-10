const mongoose = require('mongoose')
const DB = "player"

mongoose.connect(`mongodb://127.0.0.1:27017/${DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
 })
 .then(() => console.log(`Successfully connected to DB: "${DB}"`))
 .catch((err) => console.log(`Encountered error connecting to DB: "${DB}". Error: ${err}`))