#!/bin/bash

# Create a script that given an output directory builds the current application
# and generates an .aab file in the output dir.

### Parameters ###

OUTPUT_DIRECTORY = $1
ASSETS_DIRECTORY = $2
SPLASH_BACKGROUND_COLOR = $3

### Assets ###

# Place logo in the assets directory
FULL_PATH=$(realpath $0)
DIRECTORY_PATH=$(dirname $FULL_PATH)
mv $ASSETS_DIRECTORY/logo.png $DIRECTORY_PATH/../app/assets/images/

# Generate splash screen
tns resources generate splashes $ASSETS_DIRECTORY/splash.png --background $SPLASH_BACKGROUND_COLOR

# Generate app icon
tns resources generate icons $ASSETS_DIRECTORY/icon.png

### Build ###

# Sign app for release
tns build android --bundle --release --compileSdk 28 --key-store-path <./keystore-name.jks> --key-store-password <keystore-password> --key-store-alias <keystore-alias-name> --key-store-alias-password <keystore-alias-password>

# Generate a .aab file
tns build android --bundle --release --compileSdk 28 --key-store-path <./keystore-name.jks> --key-store-password <keystore-password> --key-store-alias <keystore-alias-name> --key-store-alias-password <keystore-alias-password> --aab --copy-to $OUTPUT_DIRECTORY
