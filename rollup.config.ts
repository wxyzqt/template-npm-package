import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import { dts } from "rollup-plugin-dts";

import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

const plugin_ts = typescript({
  tsconfig: "./tsconfig.json",
});

const plugin_terser = terser({
  compress: {
    drop_console: true,
    drop_debugger: true,
  },
  format: {
    comments: false, // 删除所有注释
  },
});

export default defineConfig([
  // ESM 和 CJS 双输出
  {
    input: "src/index.ts",
    external: ["utility-types"], // 如果有外部依赖，可以在这里声明
    output: [
      {
        file: "dist/index.js",
        format: "esm",
        compact: true,
      },
      {
        file: "dist/index.cjs",
        format: "cjs",
        compact: true,
      },
    ],
    plugins: [plugin_ts, plugin_terser],
  },
  // 类型声明文件
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.d.ts",
      format: "es",
    },
    plugins: [dts()],
  },
  // UMD 输出
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.umd.js",
      format: "umd",
      name: "Roles",
      compact: true,
      globals: {
        "utility-types": "utilityTypes",
      },
    },
    plugins: [resolve(), commonjs(), plugin_ts, plugin_terser],
  },
]);
