import { GroupMemberUpdateManyWithoutGroupsInput } from "./GroupMemberUpdateManyWithoutGroupsInput";
import { MessageUpdateManyWithoutGroupsInput } from "./MessageUpdateManyWithoutGroupsInput";

export type GroupUpdateInput = {
  name?: string | null;
  description?: string | null;
  createdBy?: string | null;
  groupMembers?: GroupMemberUpdateManyWithoutGroupsInput;
  messages?: MessageUpdateManyWithoutGroupsInput;
};
