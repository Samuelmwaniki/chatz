import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type GroupMemberCreateInput = {
  isAdmin?: boolean | null;
  user?: UserWhereUniqueInput | null;
  group?: GroupWhereUniqueInput | null;
};
