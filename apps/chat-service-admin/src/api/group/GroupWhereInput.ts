import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GroupMemberListRelationFilter } from "../groupMember/GroupMemberListRelationFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type GroupWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  createdBy?: StringNullableFilter;
  groupMembers?: GroupMemberListRelationFilter;
  messages?: MessageListRelationFilter;
};
