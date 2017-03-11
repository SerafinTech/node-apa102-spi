var rpio = require('rpio')

rpio.init({
  gpiomem: false
})

function Apa102spi (stringLength, clockDivider) {
  clockDivider = typeof clockDivider !== 'undefined' ? clockDivider : 200
  this.bufferLength = stringLength * 4 + 8
  this.writeBuffer = new Buffer(this.bufferLength)
  this.writeBuffer.fill(Apa102spi.START)
  this.writeBuffer[this.bufferLength - 1] = Apa102spi.END
  rpio.spiBegin()
  rpio.spiSetClockDivider(clockDivider)
}

Apa102spi.prototype.sendBuffer = function () {
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

Apa102spi.START = 0x00
Apa102spi.END = 0xFF

module.exports = Apa102spi
