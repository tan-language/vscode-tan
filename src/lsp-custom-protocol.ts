import { NotificationType } from "vscode-languageclient";

export interface ServerStatus {
  text: string;
}

export const publishServerStatusType = new NotificationType<ServerStatus>(
  "tan/publishServerStatus",
);
