import { SortOrder } from "../../util/SortOrder";

export type GroupMemberOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  isAdmin?: SortOrder;
  userId?: SortOrder;
  groupId?: SortOrder;
};
