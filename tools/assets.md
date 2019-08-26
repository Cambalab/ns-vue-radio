## Assets

### Generate splash screen

To generate all splashscreens for Android and iOS platforms and places the generated images in the correct directories under App_Resources/ directory.

`tns resources generate splashes <../image.png> --background <color>`

--background Sets the background color of the splashscreen. When no color is specified, a default value of white is used. is a valid color and can be represented with string, like white, black, blue, or with HEX representation.
