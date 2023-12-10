import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WishListModuleBase } from "./base/wishList.module.base";
import { WishListService } from "./wishList.service";
import { WishListController } from "./wishList.controller";
import { WishListResolver } from "./wishList.resolver";

@Module({
  imports: [WishListModuleBase, forwardRef(() => AuthModule)],
  controllers: [WishListController],
  providers: [WishListService, WishListResolver],
  exports: [WishListService],
})
export class WishListModule {}
