import * as assert from "assert";

// 你可以从 'vscode' 模块导入并使用所有的 API
// 同时也可以导入你的扩展进行测试
import * as vscode from "vscode";
// import * as myExtension from '../../extension';

suite("扩展测试套件", () => {
  vscode.window.showInformationMessage("开始所有测试。");

  test("示例测试", () => {
    assert.strictEqual(-1, [1, 2, 3].indexOf(5));
    assert.strictEqual(-1, [1, 2, 3].indexOf(0));
  });
});
