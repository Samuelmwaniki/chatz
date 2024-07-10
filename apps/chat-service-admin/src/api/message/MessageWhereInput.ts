import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";

export type MessageWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  sender?: StringNullableFilter;
  isRead?: BooleanNullableFilter;
  group?: GroupWhereUniqueInput;
  notifications?: NotificationListRelationFilter;
};
