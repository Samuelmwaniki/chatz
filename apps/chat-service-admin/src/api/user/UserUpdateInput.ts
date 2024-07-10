import { InputJsonValue } from "../../types";
import { GroupMemberUpdateManyWithoutUsersInput } from "./GroupMemberUpdateManyWithoutUsersInput";
import { WebSocketUpdateManyWithoutUsersInput } from "./WebSocketUpdateManyWithoutUsersInput";
import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  isOnline?: boolean | null;
  groupMembers?: GroupMemberUpdateManyWithoutUsersInput;
  webSockets?: WebSocketUpdateManyWithoutUsersInput;
  notifications?: NotificationUpdateManyWithoutUsersInput;
};
