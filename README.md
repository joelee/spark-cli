# Cisco Spark command line interface

[![NPM](https://nodei.co/npm/ciscospark-cli.png)](https://nodei.co/npm/ciscospark-cli/)

[![npm](https://img.shields.io/npm/v/ciscospark-cli.svg)](https://www.npmjs.com/package/ciscospark-cli) [![dependencies Status](https://david-dm.org/joelee/spark-cli/status.svg)](https://david-dm.org/joelee/spark-cli) [![GitHub issues](https://img.shields.io/github/issues/joelee/spark-cli.svg)](https://github.com/joelee/ciscospark/issues) 

This is a Cisco Spark command line interface which allows you to access [Cisco Spark API](https://developer.ciscospark.com/quick-reference.html) from your Shell Terminal. 

This tool is dependent on the [node-ciscospark](https://www.npmjs.com/package/node-ciscospark) module, therefore it supports all the [APIs and methods]((https://github.com/joelee/ciscospark/blob/master/README.md)) offered by that module.

## Prerequisites

- Node.js >= 4.0.0
- NPM
- *nix Shell environment (e.g. Bash)

## Installation

```bash
$ sudo npm install --global ciscospark-cli
$ spark --version
```

## Usage

## Setting up your Access Token

Before you are able to use this CLI tool, you will need an account in Spark and an Access Token. See [Getting Started](https://developer.ciscospark.com/getting-started.html)

```bash
$ export CISCOSPARK_ACCESS_TOKEN="***YourSparkAccessToken***"
```

### Send a Message to a Spark Room

```bash
$ spark -m create -p "roomId:831cb6a0-2c28-21e7-a283-f18478d5ab59" -p "text:Hello World"
```

### Send a Message to a Person

```bash
$ spark -m create -p "toPersonEmail:john.doe@example.com" -p "markdown:Hello **John**"
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
