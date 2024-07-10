import { WebSocket as TWebSocket } from "../api/webSocket/WebSocket";

export const WEBSOCKET_TITLE_FIELD = "sessionId";

export const WebSocketTitle = (record: TWebSocket): string => {
  return record.sessionId?.toString() || String(record.id);
};
