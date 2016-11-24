require('dotenv').config()
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const getTweets = require('./getTweets')

const tweets = require('./routes/tweets')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/v1/tweets', tweets)
setInterval(() => {
  getTweets()
}, 86400000)
getTweets()
module.exports = app
