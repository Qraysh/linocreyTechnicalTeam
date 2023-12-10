import { WishListWhereInput } from "./WishListWhereInput";
import { WishListOrderByInput } from "./WishListOrderByInput";

export type WishListFindManyArgs = {
  where?: WishListWhereInput;
  orderBy?: Array<WishListOrderByInput>;
  skip?: number;
  take?: number;
};
