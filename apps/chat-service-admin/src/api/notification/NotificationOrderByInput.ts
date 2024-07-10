import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  isRead?: SortOrder;
  messageId?: SortOrder;
  userId?: SortOrder;
};
