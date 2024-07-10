import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationUpdateInput = {
  isRead?: boolean | null;
  message?: MessageWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
