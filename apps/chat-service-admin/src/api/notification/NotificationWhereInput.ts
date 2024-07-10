import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationWhereInput = {
  id?: StringFilter;
  isRead?: BooleanNullableFilter;
  message?: MessageWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
