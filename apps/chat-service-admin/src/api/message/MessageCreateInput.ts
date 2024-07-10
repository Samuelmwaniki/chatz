import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { NotificationCreateNestedManyWithoutMessagesInput } from "./NotificationCreateNestedManyWithoutMessagesInput";

export type MessageCreateInput = {
  content?: string | null;
  sender?: string | null;
  isRead?: boolean | null;
  group?: GroupWhereUniqueInput | null;
  notifications?: NotificationCreateNestedManyWithoutMessagesInput;
};
