import { Message } from "../message/Message";
import { User } from "../user/User";

export type Notification = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isRead: boolean | null;
  message?: Message | null;
  user?: User | null;
};
