var Apa102spi = require('./apa102-spi')

// Apa102spi(number of leds, clock divider)
var LedDriver = new Apa102spi(9, 100)

// setLedColor(n, brightness 0-31, red 0-255, green 0-255, blue 0-255)
LedDriver.setLedColor(0, 1, 255, 0, 0)
LedDriver.setLedColor(1, 1, 0, 255, 0)
LedDriver.setLedColor(2, 1, 0, 0, 255)
LedDriver.setLedColor(3, 1, 255, 0, 0)
LedDriver.setLedColor(4, 1, 0, 255, 0)
LedDriver.setLedColor(5, 1, 0, 0, 255)
LedDriver.setLedColor(6, 1, 255, 0, 0)
LedDriver.setLedColor(7, 1, 0, 255, 0)
LedDriver.setLedColor(8, 1, 0, 0, 255)

// send data to led string
LedDriver.sendLeds()
