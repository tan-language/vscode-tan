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
    "/home/gmosx/Base/Code/Language/tanlang/tan_lsp_server/target/debug/tan_lsp_server";

  // #TODO make logging level a client option?
  // Control server logging level.
  const env = Object.assign({}, process.env);
  Object.assign(env, { RA_LOG: "trace" });

  // Logs client output to Output > Tan Client
  const clientOutputChannel = vscode.window.createOutputChannel(
    "Tan Language Client",
  );
  //   clientOutputChannel.appendLine(`This is an error message!!`);
  clientOutputChannel.show(true);

  // Logs protocol messages to Output > Tab Language Server Trace
  const traceOutputChannel = vscode.window.createOutputChannel(
    "Tan Language Server Trace",
  );

  // Server output (eprintln!) is logged to Output > Tan Language

  const serverOptions: ServerOptions = {
    run: { command, transport: TransportKind.stdio, options: { env } },
    debug: { command, transport: TransportKind.stdio, options: { env } },
  };

  const clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: "file", language: "tan" }],
    traceOutputChannel,
    synchronize: {
      // #TODO what is this?
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
