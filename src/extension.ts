// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

console.log("hello world");
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "extension.formatText",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const document = editor.document;
        const text = document.getText();
        const formattedText = formatText(text);
        const firstLine = document.lineAt(0);
        const lastLine = document.lineAt(document.lineCount - 1);
        const range = new vscode.Range(
          firstLine.range.start,
          lastLine.range.end
        );
        editor.edit((editBuilder) => editBuilder.replace(range, formattedText));
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function formatText(text: string): string {
  // 使用正则表达式匹配数字和中文、英文和中文间的空格，并插入空格
  let output = text.replace(
    /([A-Za-z0-9])?([\u4e00-\u9fa5])([A-Za-z0-9])?/g,
    function (match, p1, p2, p3) {
      var result = "";
      if (p1 && !/\s/.test(p1)) {
        result += p1 + " ";
      }
      result += p2;
      if (p3 && !/\s/.test(p3)) {
        result += " " + p3;
      }
      return result;
    }
  );

  // 返回处理后的字符串
  return output;
}

export function deactivate() {}
