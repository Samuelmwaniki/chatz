import { JsonValue } from "type-fest";
import { GroupMember } from "../groupMember/GroupMember";
import { WebSocket } from "../webSocket/WebSocket";
import { Notification } from "../notification/Notification";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  isOnline: boolean | null;
  groupMembers?: Array<GroupMember>;
  webSockets?: Array<WebSocket>;
  notifications?: Array<Notification>;
};
