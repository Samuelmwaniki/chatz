import { SortOrder } from "../../util/SortOrder";

export type WebSocketOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  sessionId?: SortOrder;
  userId?: SortOrder;
};
