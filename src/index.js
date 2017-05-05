'use strict'

const fs = require('fs')
const CiscoSpark = require('node-ciscospark')

function responseExit (opts, exitcode, response, statusCode) {
  if (!exitcode && statusCode > 399) exitcode = 11

  if (exitcode) {
    if (!opts.quiet) {
      console.error(beautify({
        response: tryParseJson(response),
        statusCode: statusCode || 500,
        exitCode: exitcode
      }))
    }
    process.exit(exitcode)
  } else if (opts.outfile) {
    if (opts.beautify) response = beautify(response)
    fs.writeFile(opts.outfile, response, function (err) {
      if (err) {
        exitcode = 12
        if (!opts.quiet) {
          console.error(beautify({
            message: 'Error writing to ' + opts.outfile,
            error: err,
            statusCode: statusCode || 500,
            exitCode: exitcode
          }))
        }
      } else if (!opts.quiet) {
        console.log('Output to file:', opts.outfile)
      }
      process.exit(exitcode)
    })
  } else {
    exitcode = 0
    if (!opts.quiet) {
      if (opts.beautify) response = beautify(response)
      console.log(response)
    }
    process.exit(exitcode)
  }
}

function tryParseJson (jsonString) {
  try {
    jsonString = JSON.parse(jsonString)
  } catch (e) {}
  return jsonString
}

function beautify (response) {
  if (typeof response === 'string') {
    response = tryParseJson(response)
  }
  try {
    return JSON.stringify(response, null, 2)
  } catch (e) {
    return response
  }
}

module.exports = function (opts) {
  if (!opts.token) return responseExit(opts, 2, 'CISCOSPARK_ACCESS_TOKEN is required', 400)
  if (!opts.method) return responseExit(opts, 3, 'Method is required', 400)
  if (!opts.command) return responseExit(opts, 4, 'Command is required', 400)
  let id = 0
  if (['get', 'update', 'delete'].indexOf(opts.command) >= 0) {
    if (!opts.params.id) return responseExit(opts, opts.command + ' command requires "id" parameter. ( --id=ObjectId )')
    id = opts.params.id
    delete opts.params.id
  }
  const callback = (err, body, rsp) => {
    const rspCode = rsp && rsp.statusCode ? rsp.statusCode : 0
    if (err) return responseExit(opts, 5, err, rspCode || 500)
    responseExit(opts, 0, body, rspCode || 203)
  }
  const spark = new CiscoSpark(opts.token)
  if (id) {
    if (opts.command === 'update') {
      spark[opts.method][opts.command](id, opts.params, callback)
    } else {
      spark[opts.method][opts.command](id, callback)
    }
  } else {
    spark[opts.method][opts.command](opts.params, callback)
  }
}
