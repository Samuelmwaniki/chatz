import { InputJsonValue } from "../../types";
import { GroupMemberCreateNestedManyWithoutUsersInput } from "./GroupMemberCreateNestedManyWithoutUsersInput";
import { WebSocketCreateNestedManyWithoutUsersInput } from "./WebSocketCreateNestedManyWithoutUsersInput";
import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  isOnline?: boolean | null;
  groupMembers?: GroupMemberCreateNestedManyWithoutUsersInput;
  webSockets?: WebSocketCreateNestedManyWithoutUsersInput;
  notifications?: NotificationCreateNestedManyWithoutUsersInput;
};
