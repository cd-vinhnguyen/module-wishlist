const tableName = 'wishlist';

exports.up = async (knex) => {
    knex.schema.hasTable(tableName).then(function (exists) {
        if (!exists) {
            return knex.schema.createTable(tableName, function (t) {
                t.uuid('wishlist_id').primary();
                t.uuid('user_id').notNullable();
                t.timestamp('updated_at');
                t.unique(['user_id', 'wishlist_id']);
            });
        }
    });
};

exports.down = async (knex) => {
    return knex.schema.dropTableIfExists(tableName);
};
