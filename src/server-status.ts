import * as vs from "vscode";
import { Disposable, StatusBarItem } from "vscode";
import { LanguageClient } from "vscode-languageclient/node";
import { publishServerStatusType } from "./lsp-custom-protocol";

export class ServerStatusService implements Disposable {
  private subscriptions: Disposable[] = [];
  private item: StatusBarItem;

  constructor(private readonly client: LanguageClient) {
    this.item = vs.window.createStatusBarItem(vs.StatusBarAlignment.Left);
    this.item.text = "👅 starting";
    this.item.tooltip = "Tan server";
    this.item.show();
    // console.log("Status bar item shown");

    this.subscriptions.push(
      client.onNotification(
        publishServerStatusType,
        (notification) => (this.item.text = notification.text),
      ),
    );
  }

  public dispose() {
    for (const subscription of this.subscriptions) {
      subscription.dispose();
    }
    this.item.dispose();
    this.item.hide();
  }
}
