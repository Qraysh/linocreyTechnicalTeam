import { WishList as TWishList } from "../api/wishList/WishList";

export const WISHLIST_TITLE_FIELD = "id";

export const WishListTitle = (record: TWishList): string => {
  return record.id?.toString() || String(record.id);
};
