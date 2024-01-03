const express = require("express")
const serverless = require("serverless-http")

const app = express()
const router = express.Router()

router.get('/', (req, res) =>{
    res.json({
        'hello': 'hi'
    })
})

router.get('/user', (req, res) =>{
    res.json({
        'user': 'Leonardo Menezes'
    })
})

app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)

// PARA TESTAR LOCAL RODE NPM START E ACESSE http://localhost:9000/.netlify/functions/api
// LINK DO VIDEO https://www.youtube.com/watch?v=hQAu0YEIF0g