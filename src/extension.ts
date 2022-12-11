import * as vscode from "vscode";
import { ExtensionContext, workspace } from "vscode";
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind,
} from "vscode-languageclient/node";

let client: LanguageClient;

export function activate(context: ExtensionContext) {
  const command =
    "/home/gmosx/Code/Language/tanlang/tan_language_server/target/debug/tan_language_server";

  const env = Object.assign({}, process.env);
  Object.assign(env, { RA_LOG: "info" });

  // Logs client messages to Output > Tan Client
  const clientOutputChannel = vscode.window.createOutputChannel(
    "Tan Language Client",
  );
  clientOutputChannel.appendLine(`This is an error message!!`);
  clientOutputChannel.show(true);

  const traceOutputChannel = vscode.window.createOutputChannel(
    "Tan Language Server Trace",
  );

  const serverOptions: ServerOptions = {
    run: { command, transport: TransportKind.stdio, options: { env } },
    debug: { command, transport: TransportKind.stdio, options: { env } },
  };

  // Options to control the language client
  const clientOptions: LanguageClientOptions = {
    // Register the server for tan language documents
    documentSelector: [{ scheme: "file", language: "tan" }],
    traceOutputChannel,
    synchronize: {
      // Notify the server about file changes to '.clientrc files contained in the workspace
      fileEvents: workspace.createFileSystemWatcher("**/.clientrc"),
    },
  };

  context.subscriptions.push(
    vscode.commands.registerCommand("tan.syntaxTree", (args) => {
      console.log(args);
    }),
  );

  client = new LanguageClient(
    "tan",
    "Tan Language",
    serverOptions,
    clientOptions,
  );

  client.start();
}

export function deactivate(): Thenable<void> | undefined {
  if (!client) {
    return undefined;
  }
  return client.stop();
}
