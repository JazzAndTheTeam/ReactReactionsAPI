
exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('tweets', (table) => {
    table.increments().primary()
    table.string('tweet')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.integer('votes').defaultTo(0)
  })
}

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('tweets')
