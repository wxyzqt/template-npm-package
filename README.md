# template-npm-package

旨在提供一个npm包开发模板，减少工程配置，保证一致性。

## 模板提供的功能

| 文件夹/文件      | 概述                                                   |
| :--------------- | :----------------------------------------------------- |
| .husky           | git提交钩子                                            |
| .vscode          | vscode跟随项目的配置json文件                           |
| dist             | 输出目录                                               |
| docs             | 包文档                                                 |
| src              | 源代码目录                                             |
| test             | 测试目录                                               |
| .gitattributes   | 统一项目换行符,避免git产生的不一致                     |
| .gitignore       | git提交忽略文件                                        |
| .prettiergnore   | prettier格式化忽略文件                                 |
| .prettierrc      | 为空，提示IDE使用prettier，采用默认配置                |
| eslint.config.ts | eslint配置，与ts结合                                   |
| LICENSE.md       | 开源许可证，默认ISC                                    |
| rollup.config.ts | rollup打包配置，已提供es、cjs、umd以及类型声明文件示例 |
| tsconfig.json    | ts配置                                                 |
| typedoc.json     | typedoc配置                                            |
