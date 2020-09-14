//
// Example on how to set three LEDS red, green and blue
//

// remove the `./` part in the path when you are using apa102-spi as a package
//              `----------v
import { Apa102spi } from './apa102-spi';

//    number of attached LEDs --v    v---- clock divider
const LedDriver = new Apa102spi(3, 200);

// set up next led scheme by specifying 
//  - LED Number (0..5)
//  - brightnes (0..31)
//  - red value (0..255)
//  - green value (0..255)
//  - blue value (0..255)
//
// set first LED to red
LedDriver.setLedColor(0, 1, 255, 0, 0)
// set second LED to green
LedDriver.setLedColor(1, 1, 0, 255, 0)
// set second LED to blue
LedDriver.setLedColor(2, 1, 0, 0, 255)

// send data to led string
LedDriver.sendLeds()
