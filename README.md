# Cisco Spark command line interface

This is a Cisco Spark command line interface. It is dependent on the [node-ciscospark](https://www.npmjs.com/package/node-ciscospark) module, therefore it supports all the APIs and methods offered by that module.

## Prerequisites

- Node.js >= 4.0.0
- NPM

## Installation

```bash
$ sudo npm install --global spark-cli
$ spark --version
```

## Usage

## Setting up your Access Token

```bash
$ export CISCOSPARK_ACCESS_TOKEN="***YourSparkAccessToken***"
```

### Send a Message to a Spark Room

```bash
$ spark -m create -p "roomId:831cb6a0-2c28-21e7-a283-f18478d5ab59" -p "text:Hello World"
```

### Send a Message to a Person

```bash
$ spark -m create -p "personEmail:john.doe@example.com" -p "text:Hello John"
```

### Get Command Help

```
$ spark --help

Cisco Spark API command line tool

  Command line wrapper for Cisco Spark API

Options

  -h, --help                     Show help (This screen)
  -a, --api objectType           API Request type. (Default: messages)
  -m, --method actionName        Method Name (Default: list)
  -p, --params key1:value1 ...   Field parameters
  -j, --json jsonString          Field parameters as JSON string
  -t, --token accessToken        Spark Access Token
  -V, --version                  Show version number
  -v, --verbose                  Verbose Output
```

## Supported API and Methods

For the supported API and methods, see [node-ciscospark](https://www.npmjs.com/package/node-ciscospark) [README.md](https://github.com/joelee/ciscospark/blob/master/README.md).

## License

The MIT License (MIT)

Copyright (C) 2017 Joseph Lee

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

## Contributor(s)

Joseph Lee [![Twitter Follow](https://img.shields.io/twitter/follow/joe_lee.svg?style=social&label=Follow)](https://twitter.com/joe_lee)
