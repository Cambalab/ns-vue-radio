#!/bin/bash

# Create a script that given an output directory builds the current application
# and generates an .aab file in the output dir.

# Params: $1: output directory

### Assets ###

# Place logo in the assets file
full_path=$(realpath $0)
dir_path=$(dirname $full_path)
mv ./logo-hippie.png $dir_path/../app/assets/images/

# Generating splash screen
tns resources generate splashes <./splash-image.png> --background <rgb-color>

# Generating app icon
tns resources generate icons <./icon-image.png>

### Build ###

# Sign app for release
tns build android --bundle --release --compileSdk 28 --key-store-path <./keystore-name.jks> --key-store-password <keystore-password> --key-store-alias <keystore-alias-name> --key-store-alias-password <keystore-alias-password>

# Generate a .aab file
tns build android --bundle --release --compileSdk 28 --key-store-path <./keystore-name.jks> --key-store-password <keystore-password> --key-store-alias <keystore-alias-name> --key-store-alias-password <keystore-alias-password> --aab --copy-to $1
