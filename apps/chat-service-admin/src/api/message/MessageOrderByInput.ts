import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  sender?: SortOrder;
  isRead?: SortOrder;
  groupId?: SortOrder;
};