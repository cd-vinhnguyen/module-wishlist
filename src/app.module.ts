import { GateKeeper, Module } from "@heronjs/common";
import { HealthApi } from "./api";
import { UserWishlistController } from "./features/wishlist/app/controller/user/wishlist.controller"
import { AuthContext } from "./context";

@Module({
    controllers: [HealthApi, UserWishlistController],
})
@GateKeeper(AuthContext, AuthContext.Resolver)
class AppModule { }

export { AppModule };