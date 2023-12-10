import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WishListService } from "./wishList.service";
import { WishListControllerBase } from "./base/wishList.controller.base";

@swagger.ApiTags("wishLists")
@common.Controller("wishLists")
export class WishListController extends WishListControllerBase {
  constructor(
    protected readonly service: WishListService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
