import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WebSocketWhereInput = {
  id?: StringFilter;
  sessionId?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
