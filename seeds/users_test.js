
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Alice'},
        {id: 2, name: 'rowValue2'},
        {id: 3, name: 'rowValue3'}
      ]);
    });
};
