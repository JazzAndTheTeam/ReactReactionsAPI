const express = require('express')
const router = express.Router()

const db = require('../db/tweets')

router.get('/', function(req, res, next) {
  db.getTweets()
    .then((tweets) => {
      res.json(tweets)
    })
})

module.exports = router
