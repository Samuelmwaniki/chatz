import { GroupMember } from "../groupMember/GroupMember";
import { Message } from "../message/Message";

export type Group = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  createdBy: string | null;
  groupMembers?: Array<GroupMember>;
  messages?: Array<Message>;
};
