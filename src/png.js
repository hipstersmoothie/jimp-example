const fs = require('fs')
const {PNG} = require('pngjs');

const buffer = fs.readFileSync('./exampleImages/dice.png')
const png = PNG.sync.read(buffer)

const outBuffer = PNG.sync.write(png, { deflateStrategy: 1 })

console.log(buffer.byteLength, png.data.byteLength, outBuffer.byteLength)