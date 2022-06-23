import {Get, Rest} from '@heronjs/common';
import {Wishlist} from "../../../infra/dao/queries/wishlist";
import {WishlistTable} from "../../../infra/dao/queries/wishlist";


@Rest('/wishlist')
export class UserWishlistController {

    @Get({ uri: '/liveness'})
    public async findAll(): Promise<WishlistTable> {
        let wishList = new Wishlist(<KnexClient>);
        return wishList.getById('id');
    }
}



