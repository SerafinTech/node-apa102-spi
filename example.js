var Apa102spi = require('./apa102-spi')

// Apa102spi(number of leds, clock divider)
var LedDriver = new Apa102spi(3, 100)

// setLedColor(n, brightness 0-31, red 0-255, green 0-255, blue 0-255)
LedDriver.setLedColor(0, 31, 255, 0, 0)
LedDriver.setLedColor(1, 31, 0, 255, 0)
LedDriver.setLedColor(2, 31, 0, 0, 255)

// send data to led string
LedDriver.sendBuffer()
