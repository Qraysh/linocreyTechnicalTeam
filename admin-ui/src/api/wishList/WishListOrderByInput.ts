import { SortOrder } from "../../util/SortOrder";

export type WishListOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  listingId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
