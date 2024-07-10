import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WebSocketUpdateInput = {
  sessionId?: string | null;
  user?: UserWhereUniqueInput | null;
};
