import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationCreateInput = {
  isRead?: boolean | null;
  message?: MessageWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
