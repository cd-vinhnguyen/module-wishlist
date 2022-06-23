const tableName = 'wishlist_item';

exports.up = async (knex) => {
    knex.schema.hasTable(tableName).then(function (exists) {
        if (!exists) {
            return knex.schema.createTable(tableName, function (t) {
                t.uuid('wishlist_item_id').primary();
                t.uuid('wishlist_id').notNullable();
                t.uuid('product_id').notNullable();
                t.timestamp('added_at');
                // add foreign key : WISHLIST_ITEM_WISHLIST_ID_WISHLIST_WISHLIST_ID
                // add foreign key : WISHLIST_ITEM_PRODUCT_ID_CATALOG_PRODUCT_ENTITY_ENTITY_ID
            });
        }
    });
};

exports.down = async (knex) => {
    return knex.schema.dropTableIfExists(tableName);
};
