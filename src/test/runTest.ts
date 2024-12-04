import * as path from "path";
import { runTests } from "vscode-test";

async function main() {
  try {
    // 包含扩展清单 package.json 的文件夹
    // 传递给 `--extensionDevelopmentPath`
    const extensionDevelopmentPath = path.resolve(__dirname, "../../");

    // 测试运行器的路径
    // 传递给 --extensionTestsPath
    const extensionTestsPath = path.resolve(__dirname, "./suite/index");

    // 下载 VS Code，解压并运行集成测试
    await runTests({ extensionDevelopmentPath, extensionTestsPath });
  } catch (err) {
    console.error("运行测试失败");
    process.exit(1);
  }
}

main();
