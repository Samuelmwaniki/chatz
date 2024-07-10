import { User } from "../user/User";
import { Group } from "../group/Group";

export type GroupMember = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isAdmin: boolean | null;
  user?: User | null;
  group?: Group | null;
};
