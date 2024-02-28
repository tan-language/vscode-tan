import { NotificationType } from "vscode-languageclient";

export interface PublishServerStatusParams {
  text: string;
}

export const publishServerStatusType = new NotificationType<
  PublishServerStatusParams
>(
  "tan/publishServerStatus",
);
