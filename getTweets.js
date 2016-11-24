const Twitter = require('twitter')
const db = require('./db/tweets')

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})
module.exports = () => {
    const params = {q: 'reactjs'};
    client.get('search/tweets', params, function(error, data, response) {
      if (!error) {
        const tweets = data.statuses.map((tweetData) => {
          return {tweet: tweetData.text}
        })
        db.addTweets(tweets)
        .then(() => {
          db.getTweets()
            .then((tweets) => {
              console.log(tweets)
            })
        })
      }
    })
}
