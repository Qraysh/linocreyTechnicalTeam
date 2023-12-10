import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";
import { WishListListRelationFilter } from "../wishList/WishListListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  listings?: ListingWhereUniqueInput;
  trips?: TripListRelationFilter;
  username?: StringFilter;
  wishLists?: WishListListRelationFilter;
};
