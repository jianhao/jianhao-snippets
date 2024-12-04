// 'vscode' 模块包含了 VS Code 扩展性 API
import * as vscode from "vscode";

// 当扩展被激活时调用此方法
// 扩展第一次执行命令时会被激活
export function activate(context: vscode.ExtensionContext) {
  // 使用 console 输出诊断信息（console.log）和错误（console.error）
  // 这段代码仅在扩展激活时执行一次
  console.log("jianhao-snippets' is now active ✨✨✨!");

  // 命令在 package.json 文件中定义
  // 现在提供命令的实现，使用 registerCommand
  // 命令 ID 参数必须与 package.json 中的命令字段匹配
  let disposable = vscode.commands.registerCommand(
    "jianhao-snippets.jianhao-snippets",
    () => {
      // 在这里放置的代码每次执行命令时都会执行

      // 向用户显示消息框
      vscode.window.showInformationMessage("成功加载 JianHao Snippets ✨✨✨!");
    }
  );

  context.subscriptions.push(disposable);
}

// 当扩展被停用时调用此方法
export function deactivate() {}
