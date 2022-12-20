# VSCode Tan Extension

A Visual Studio Code (VSCode) extension for the Tan language.

## Setup

```sh
cd tan_lsp_server
cargo r
```

```sh
npm i
```

Compile:

```sh
npm run compile
```

Package as VSIX:

```sh
npm run package
```

or

```sh
vsce package
```

To install, go to the VSCode extensions sidebar and select `Install Extension VSIX` from the overflow menu (3 dots menu), top-right.

## Links

- https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide
- https://github.com/slint-ui/slint/tree/master/editors/vscode
- https://code.visualstudio.com/api/working-with-extensions/bundling-extension

## TODO

- inject the compiled lsp-server binary into the extension?
  - or put to a well-known location.
- convert tan.tmLanguage to JSON.