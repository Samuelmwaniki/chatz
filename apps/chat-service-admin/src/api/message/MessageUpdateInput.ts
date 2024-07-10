import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { NotificationUpdateManyWithoutMessagesInput } from "./NotificationUpdateManyWithoutMessagesInput";

export type MessageUpdateInput = {
  content?: string | null;
  sender?: string | null;
  isRead?: boolean | null;
  group?: GroupWhereUniqueInput | null;
  notifications?: NotificationUpdateManyWithoutMessagesInput;
};
