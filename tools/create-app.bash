#!/bin/bash

# Create a script that given an output directory builds the current application
# and generates an .aab file in the output dir.

### Parameters ###

OUTPUT_DIRECTORY = $1
ASSETS = $2
SPLASH_BACKGROUND_COLOR = $3

### Assets ###

# Place logo in the assets directory
FULL_PATH=$(realpath $0)
DIR_PATH=$(dirname $FULL_PATH)
mv $ASSETS/logo.png $DIR_PATH/../app/assets/images/

# Generating splash screen
tns resources generate splashes $ASSETS/splash.png --background $SPLASH_BACKGROUND_COLOR

# Generating app icon
tns resources generate icons $ASSETS/icon.png

### Build ###

# Sign app for release
tns build android --bundle --release --compileSdk 28 --key-store-path <./keystore-name.jks> --key-store-password <keystore-password> --key-store-alias <keystore-alias-name> --key-store-alias-password <keystore-alias-password>

# Generate a .aab file
tns build android --bundle --release --compileSdk 28 --key-store-path <./keystore-name.jks> --key-store-password <keystore-password> --key-store-alias <keystore-alias-name> --key-store-alias-password <keystore-alias-password> --aab --copy-to $OUTPUT_DIRECTORY
