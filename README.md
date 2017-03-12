node-apa102-spi
==========
Node Raspberry Pi library to drive APA102 RGB led over SPI

### Installation
```sh
npm install apa102-spi
```

### Usage
```js
var Apa102spi = require('apa102-spi')

// Apa102spi(number of leds, clock divider)
var LedDriver = new Apa102spi(9, 100)

// setLedColor(n, brightness 0-31, red 0-255, green 0-255, blue 0-255)
LedDriver.setLedColor(0, 1, 255, 0, 0)

// send data to led string
LedDriver.sendLeds()
```
The `clock divider` argument is an even divisor of the base 250MHz rate ranging between 0 and 65536.

This library must be run as root
