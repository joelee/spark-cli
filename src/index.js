'use strict'

const CiscoSpark = require('node-ciscospark')

function responseExit (code, text) {
  if (code) {
    console.error(text)
    process.exit(code)
  }
  console.log(text)
  process.exit(0)
}

module.exports = function (opts) {
  if (!opts.token) responseExit(2, 'CISCOSPARK_ACCESS_TOKEN is required')
  if (!opts.api) responseExit(3, 'API Request Type is required')
  if (!opts.method) responseExit(3, 'Method is required')
  const spark = new CiscoSpark(opts.token)
  spark[opts.api][opts.method](opts.payload, (err, body, rsp) => {
    if (err) return responseExit(rsp.statusCode, err)
    responseExit(0, body)
  })
}
