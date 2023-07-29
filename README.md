# VSCode Tan Language Extension

A Visual Studio Code (VSCode) extension for the Tan Language.

## Setup

```sh
cd tan-language-server
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

> #Tip: If you only change non-ts files, no need to run compile.

To install, go to the VSCode extensions sidebar and select `Install Extension VSIX` from the overflow menu (3 dots menu), top-right.

Make sure the latest version of tan-language-server is installed:

```sh
cargo install tan-language-server
```

## Setup

```sh
cargo install tan-language-server
```

## Status

This is an _experimental_ project, not intended for production use.

## Contributing

Pull requests, issues, and comments are welcome! Make sure to add tests for new features and bug fixes.

## License

This work is licensed under the Apache-2.0 License. See [LICENSE.txt](LICENSE.txt) or <https://spdx.org/licenses/Apache-2.0.html> for details.

## Copyright

Copyright © 2022 [Georgios Moschovitis](https://gmosx.ninja).