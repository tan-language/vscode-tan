import * as vscode from "vscode";

// #ai

export class OutlineProvider implements vscode.TreeDataProvider<SymbolItem> {
  onDidChangeTreeData?: vscode.Event<SymbolItem | null | undefined> | undefined;

  getTreeItem(element: SymbolItem): vscode.TreeItem {
    return element;
  }

  async getChildren(element?: SymbolItem): Promise<SymbolItem[]> {
    if (!vscode.window.activeTextEditor) {
      return [];
    }

    const document = vscode.window.activeTextEditor.document;

    const symbols = await vscode.commands.executeCommand<
      vscode.DocumentSymbol[]
    >(
      "vscode.executeDocumentSymbolProvider",
      document.uri,
    );

    // Transform the symbols into SymbolItem objects for the TreeView
    return (symbols || []).map((symbol) => new SymbolItem(symbol));
  }
}

class SymbolItem extends vscode.TreeItem {
  constructor(
    public readonly symbol: vscode.DocumentSymbol,
  ) {
    super(
      symbol.name,
      symbol.children.length
        ? vscode.TreeItemCollapsibleState.Collapsed
        : vscode.TreeItemCollapsibleState.None,
    );

    // Determine the appropriate icon based on the symbol kind
    // ... (You can map the symbol kind to VS Code's icon set)

    this.command = {
      title: "Go to Symbol",
      command: "revealLine",
      arguments: [{ lineNumber: symbol.range.start.line, at: "top" }],
    };
  }
}
