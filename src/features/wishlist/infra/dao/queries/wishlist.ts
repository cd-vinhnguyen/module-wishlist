// write query crud here

// import knex

// function create
// function read => getById(wishlist_id), getByUserId(userid, getList(filter)
// function update
// function delete => delete
import { DatabaseLookup, ModuleDatabase } from '@heronjs/common';

import { KnexClient } from '@heronjs/core';

export type WishlistTable = {
    wishlist_id: string;
    user_id: string;
    updated_at: Date;
}

export interface IWishList {
    getById(id: string) : Promise<WishlistTable>;
}
export class Wishlist implements IWishList{
    private readonly _client: KnexClient;
    constructor(
        @DatabaseLookup() private readonly _db: ModuleDatabase<KnexClient>
    ) {
        this._client = _db.database()!;
    }
    public async getById(id: string): Promise<WishlistTable> {
        const query = this._client('wishlist').select<WishlistTable>().where({ id }).first();
        const wishlist = await query;
        var modal = {} as WishlistTable;
        if (wishlist) {
            modal.wishlist_id = wishlist.wishlist_id;
            modal.user_id = wishlist.user_id;
            modal.updated_at = wishlist.updated_at;
        }
        return modal;
    }
}