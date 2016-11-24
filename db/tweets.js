const Knex = require('knex')
const knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']

const knex = Knex(knexConfig)

const addTweets = (tweets) => {
  return knex('tweets').insert(tweets)
}
const getTweets = () => {
  return knex('tweets')
}

module.exports = {
  addTweets,
  getTweets
}
