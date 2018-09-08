var rpio = require('rpio')

rpio.init({
  gpiomem: false
})

function Apa102spi (stringLength, clockDivider) {
  clockDivider = typeof clockDivider !== 'undefined' ? clockDivider : 200
  this.bufferLength = stringLength * 4
  this.writeBuffer = Buffer.alloc(this.bufferLength, 'E0000000', 'hex')
  this.bufferLength += 4
  this.writeBuffer = Buffer.concat([Buffer.alloc(4, '00000000', 'hex'), this.writeBuffer], this.bufferLength)
  
  rpio.spiBegin()
  rpio.spiSetClockDivider(clockDivider)
}

Apa102spi.prototype.sendLeds = function () {
  rpio.spiWrite(this.writeBuffer, this.bufferLength)
}

Apa102spi.prototype.setLedColor = function (n, brightness, r, g, b) {
  n *= 4
  n += 4
  this.writeBuffer[n] = brightness | 0b11100000
  this.writeBuffer[n + 1] = b
  this.writeBuffer[n + 2] = g
  this.writeBuffer[n + 3] = r
}

Apa102spi.prototype.setBuffer = function (ledBuffer) {
  this.writeBuffer = Buffer.concat([Buffer.alloc(4, '00000000', 'hex'), ledBuffer], this.bufferLength)
}

module.exports = Apa102spi