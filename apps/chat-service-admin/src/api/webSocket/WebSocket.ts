import { User } from "../user/User";

export type WebSocket = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  sessionId: string | null;
  user?: User | null;
};
