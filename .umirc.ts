import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  presets: [],
  npmClient: 'pnpm',
  // extraBabelPresets: [
  //   [
  //     require.resolve('@umijs/bundler-utils/compiled/babel/preset-typescript'),
  //     {
  //       // 支持vue 后缀
  //       allExtensions: true,
  //       // 支持tsx
  //       isTSX: true,
  //       allowNamespaces: true,
  //       allowDeclareFields: true,
  //       onlyRemoveTypeImports: true,
  //       optimizeConstEnums: true,
  //     },
  //   ],
  // ],
  chainWebpack:(memo, args)=>{
    debugger
    return memo
  }
});
