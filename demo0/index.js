var babelCore = require('@babel/core')
var sourceCode = `let fn = (num) => num + 2`

var options = {
    presets: []
}

var result = babelCore.transform(sourceCode, options)

console.log('source code：')
console.log(sourceCode)
console.log('==========')
console.log('result code：')
console.log(result.code)