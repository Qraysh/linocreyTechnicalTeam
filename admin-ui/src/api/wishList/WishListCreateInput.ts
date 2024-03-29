import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishListCreateInput = {
  listing: ListingWhereUniqueInput;
  user: UserWhereUniqueInput;
};
