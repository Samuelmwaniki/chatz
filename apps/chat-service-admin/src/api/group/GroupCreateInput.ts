import { GroupMemberCreateNestedManyWithoutGroupsInput } from "./GroupMemberCreateNestedManyWithoutGroupsInput";
import { MessageCreateNestedManyWithoutGroupsInput } from "./MessageCreateNestedManyWithoutGroupsInput";

export type GroupCreateInput = {
  name?: string | null;
  description?: string | null;
  createdBy?: string | null;
  groupMembers?: GroupMemberCreateNestedManyWithoutGroupsInput;
  messages?: MessageCreateNestedManyWithoutGroupsInput;
};
