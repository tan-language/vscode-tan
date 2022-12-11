let esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["src/extension.ts"],
    bundle: true,
    external: [
      "vscode",
      "vscode-languageclient",
      "vscode-languageclient/node",
      "path",
      "fs",
    ],
    outfile: "out/extension.js",
    platform: "node",
    format: "cjs",
  })
  .catch(() => process.exit(1));
