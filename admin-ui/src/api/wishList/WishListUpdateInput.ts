import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishListUpdateInput = {
  listing?: ListingWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
