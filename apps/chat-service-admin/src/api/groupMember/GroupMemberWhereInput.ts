import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type GroupMemberWhereInput = {
  id?: StringFilter;
  isAdmin?: BooleanNullableFilter;
  user?: UserWhereUniqueInput;
  group?: GroupWhereUniqueInput;
};
