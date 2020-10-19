
exports.up = function(knex) {
    return knex.schema.createTable("xiong_family", function (table) {
        table.increments('id').primary(); // id
        table.string("first_name").notNullable; // name
        table.string("middle_name");
        table.integer("age");
        table.string("birthday");
        table.string("birthplace");
        table.string("likes");
        table.string("dislikes");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTables("xiong_family");
};
