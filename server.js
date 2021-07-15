const express = require('express')
const db = require('./db');

const PORT = process.env.PORT || 5000

db.sequelize.sync()

const app = express()
app.use(express.json({extended: false}))
app.get('/', ((req, res) => res.send('API running')))

//Define Routes
app.use('/tweets', require('./routes/tweets'))
app.use('/retweets', require('./routes/retweets'))

app.listen(PORT, () => console.log(`Server start on port ${PORT}`))
