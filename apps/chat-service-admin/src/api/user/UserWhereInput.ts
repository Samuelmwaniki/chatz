import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { GroupMemberListRelationFilter } from "../groupMember/GroupMemberListRelationFilter";
import { WebSocketListRelationFilter } from "../webSocket/WebSocketListRelationFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  isOnline?: BooleanNullableFilter;
  groupMembers?: GroupMemberListRelationFilter;
  webSockets?: WebSocketListRelationFilter;
  notifications?: NotificationListRelationFilter;
};
