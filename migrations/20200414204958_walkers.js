
exports.up = function(knex) {
  return knex.schema.createTable('walker_table', table => {
    table.increments('id').primary()
    table.string('first_name')
    table.string('last_name')
    table.string('blurb')
    table.string('photo')
    table.string('city_name')
    table.string('email')
    table.integer('user_id')
    table.integer('feedback_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('walker_table')
};
