exports.up = function (knex) {
    return knex.schema.createTable('posts', posts => {
        posts.increments();

        posts
            .string('text', 500)
            .notNullable();

        posts
            .string('author', 128)

        posts.timestamp('created_at').defaultTo(knex.fn.now());

    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('posts');
};
