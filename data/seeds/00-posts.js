
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('posts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        { text: 'quote1', author: '3' },
        { text: 'quote2', author: '4' },
        { text: 'quote3', author: '2' }
      ]);
    });
};
