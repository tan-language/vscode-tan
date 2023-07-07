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

## Status

This is an _experimental_ project, not intended for production use.

## Contributing

Pull requests, issues, and comments are welcome! Make sure to add tests for new
features and bug fixes.

## Contact

For questions, suggestions, etc, you can reach the maintainer on
[Twitter](https://twitter.com/gmosx).

## License

This work is distributed under the terms of the Apache License (Version 2.0).
See the [License](LICENSE.txt) for details.

Any contribution intentionally submitted for inclusion in this project, as
defined in the Apache-2.0 License, shall be licensed as above, without any
additional terms or conditions.

## Disclaimer

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the [License](LICENSE.txt) for the specific language governing permissions and
limitations under the License.

## Copyright

Copyright © 2022 [Georgios Moschovitis](https://gmosx.ninja).