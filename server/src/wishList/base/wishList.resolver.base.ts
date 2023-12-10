/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { WishList } from "./WishList";
import { WishListCountArgs } from "./WishListCountArgs";
import { WishListFindManyArgs } from "./WishListFindManyArgs";
import { WishListFindUniqueArgs } from "./WishListFindUniqueArgs";
import { CreateWishListArgs } from "./CreateWishListArgs";
import { UpdateWishListArgs } from "./UpdateWishListArgs";
import { DeleteWishListArgs } from "./DeleteWishListArgs";
import { Listing } from "../../listing/base/Listing";
import { User } from "../../user/base/User";
import { WishListService } from "../wishList.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WishList)
export class WishListResolverBase {
  constructor(
    protected readonly service: WishListService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "WishList",
    action: "read",
    possession: "any",
  })
  async _wishListsMeta(
    @graphql.Args() args: WishListCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [WishList])
  @nestAccessControl.UseRoles({
    resource: "WishList",
    action: "read",
    possession: "any",
  })
  async wishLists(
    @graphql.Args() args: WishListFindManyArgs
  ): Promise<WishList[]> {
    return this.service.wishLists(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => WishList, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "WishList",
    action: "read",
    possession: "own",
  })
  async wishList(
    @graphql.Args() args: WishListFindUniqueArgs
  ): Promise<WishList | null> {
    const result = await this.service.wishList(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WishList)
  @nestAccessControl.UseRoles({
    resource: "WishList",
    action: "create",
    possession: "any",
  })
  async createWishList(
    @graphql.Args() args: CreateWishListArgs
  ): Promise<WishList> {
    return await this.service.createWishList({
      ...args,
      data: {
        ...args.data,

        listing: {
          connect: args.data.listing,
        },

        user: {
          connect: args.data.user,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WishList)
  @nestAccessControl.UseRoles({
    resource: "WishList",
    action: "update",
    possession: "any",
  })
  async updateWishList(
    @graphql.Args() args: UpdateWishListArgs
  ): Promise<WishList | null> {
    try {
      return await this.service.updateWishList({
        ...args,
        data: {
          ...args.data,

          listing: {
            connect: args.data.listing,
          },

          user: {
            connect: args.data.user,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => WishList)
  @nestAccessControl.UseRoles({
    resource: "WishList",
    action: "delete",
    possession: "any",
  })
  async deleteWishList(
    @graphql.Args() args: DeleteWishListArgs
  ): Promise<WishList | null> {
    try {
      return await this.service.deleteWishList(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Listing, {
    nullable: true,
    name: "listing",
  })
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "read",
    possession: "any",
  })
  async getListing(
    @graphql.Parent() parent: WishList
  ): Promise<Listing | null> {
    const result = await this.service.getListing(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: WishList): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
