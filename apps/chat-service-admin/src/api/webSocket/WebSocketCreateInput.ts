import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WebSocketCreateInput = {
  sessionId?: string | null;
  user?: UserWhereUniqueInput | null;
};
