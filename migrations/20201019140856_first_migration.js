
exports.up = function(knex) {
  return knex.schema.createTable("users", function (table) {
      table.increments(); // id
      table.string("name"); // name
  })
};

exports.down = function(knex) {
  return knex.schema.dropTables("users");
};
