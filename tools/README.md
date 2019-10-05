## Create Ns Vue Radio tool

Based on existent nativescript tools, `ns-vue-radio` provides a bash script to help building radio apps easily from the command line.

The script will generate a `.aab` bundle that let us build different `apks`, each one optimized for different devices. This bundle or a single `.apk` file can be used to deploy applications to the Google Play Store. We rather like to create bundles than a single apk.

To run the script program, a set of parameters that will be used during the building process are required. To understand the nature of those requirements we'd likely need to understand the processes involved.

## What does the script do?

*   Places the **Firebase** configuration `google-services.json` to the proper **Android** directory.
*   Temprarily configures the `app.gradle`, `strings.xml` and `package.json` with a provided app name for the build process.
*   Configures the application with the provided logo.
*   Generates the splash screens.
*   Generates the icons.
*   Builds an `.aab` bundle for apks optimization.
*   Restores the `app.gradle`, `strings.xml` and `package.json` configuration with the original repository values.

## Requirements

The main requirement is the `tns` program. You should already have it installed if you followed the main [`README.md`](https://github.com/Cambalab/ns-vue-radio/blob/develop/README.md).

## Usage

### Script Parameters

The script takes a set of parameters as input, described as follows:

> The order is important since we haven't implemented flags yet. At the moment they're all required.

#### Output directory

+   **Details:** a directory where the `.aab` bundle will be writen to.

#### Assets directory

+   **Details:** a directory where the assets to be used for the `logo`, `splash` screens and app `icon` are stored.

> The script will look for 3 files with the following name: `logo.png`, `splash.png` and `icon.png`, so make sure the files are correctly named.

#### Splash background color

+   **Details:** an hexadecimal color to use as background in the splash screen.

+   **Type:** `String`

#### Path to the Keystore file

+   **Details:** the path where the keystore is stored.

> If you don't have a keystore file take a look at the keystore generation [**guide**](/guide-to-generate-a-keystore).

#### Keystore alias

+   **Details:** the alias of your keystore.

#### Keystore password

+   **Details:** the password of your keystore.

#### Keystore alias

+   **Details:** the alias of your keystore.

#### Keystore alias password

+   **Details:** the alias password of your keystore

#### Path to the application configuration file

+   **Details:** the path to the configuration `.json` file for the application.

> If you don't have a configuration file take a look at the input file design [**guide**](/input-file-design) to understand how to create one.

#### Path to the Google Services file

+   **Details:** the path to the `google-services.json` file.

> If you don't have a google services configuration take a look at the firebase configuration [**guide**](https://github.com/Cambalab/ns-vue-radio/blob/develop/docs/Firebase-configuration-guide.md)

### Running the script

It's useful to define all those parameters in environment variables, so that we can test them later in our devices. We'll first declare all the parameters as environment variables and them use them to run the script.

> Note: you might want to create your own `PROJECT_DIR` and directories where you store your configuration files, assets, etc. Copy this snippets and edit them as necessary.

```bash
# I define my own directory where I store all the necessary data to run the script
export PROJECT_DIR=~/Documents/myRadioProjectDirectory
# Keystore parameters
export KEYSTORE_FILENAME=com-radio-example
export KEYSTORE_PASS=comradioexample
export KEYSTORE_ALIAS=com-radio-example
export KEYSTORE_ALIAS_PASSWORD=$KEYSTORE_PASS
export KEYSTORE_FILE="${PROJECT_DIR}/data/keystore/${KEYSTORE_FILENAME}.jks"
# Assets parameters
export ASSETS_DIRECTORY="${PROJECT_DIR}/data/assets"
export SPLASH_BG_COLOR="#000000"
# Configuration files
export APP_CONFIG_PATH="${PROJECT_DIR}data/fakeConfig.json"
export FIREBASE_CONFIG_PATH="${PROJECT_DIR}data/google-services.json"
# Others
export AAB_OUTPUT_DIRECTORY="${PROJECT_DIR}/deployments/aab/"
```

Now that we've set the necessary environment, we can finally run the script.

```bash
tools/create-app.bash \
$AAB_OUTPUT_DIRECTORY \
$ASSETS_DIRECTORY \
$SPLASH_BG_COLOR \
$KEYSTORE_FILE \
$KEYSTORE_PASS \
$KEYSTORE_ALIAS \
$KEYSTORE_ALIAS_PASSWORD \
$APP_CONFIG_PATH \
$FIREBASE_CONFIG_PATH
```

## Test the generated bundle

The `.aab` bundle is used to generate many apks, each of them specifically supports different devices architecture and/or Android versions. Since every single `.apk` is built exclusively for a specific device, the file is a lot lighter than an `.apk` that supports every (or many of) Android device architecture. Sometimes an optimized application weight is half the size of a non-optimized `.apk`, which allows users to download it quicker than other applications and uses less device storage.

Here's the official [**documentation**](https://docs.nativescript.org/angular/tooling/publishing/android-app-bundle#testing-the-produced-aab-file), or you can follow the steps explained below.

We'll also use `adb`, so make sure you have it installed. They're part of the SDk tools installation which is described in the main [`README.md`](https://github.com/Cambalab/ns-vue-radio/blob/develop/README.md), so you should have it installed by now.

> Here's some [tutorial](https://www.droidviews.com/install-adb-and-fastboot-on-linux/) to install adb anyway.

**What we'll do:**

**1.**  Generate `apks` from an `.aab` bundle.  
**2.**  Install an `apk` from the generated `apks` in our device.

**1.** In order to generate `.apks` from an `.aab` bundle we need a java tool named `bundletool`. The `.jar` can be downloaded from [**here**](https://github.com/google/bundletool/releases/tag/0.10.2) or by typing in a terminal:

```bash
# navigated to a desired directory where the tool will be downloaded
# download the bundletool .jar
wget https://github.com/google/bundletool/releases/download/0.10.2/bundletool-all-0.10.2.jar
```

The `bundletool` is used as follows:

Like we did before, I'll setup my environment to declare my `bundletool` path and other `input/output` directories.

```bash
# Bundletool
export BUNDLETOOL_PATH="$PROJECT_DIR/bundletool/0.10.2/bundletool.jar"
# note that this is the same as `AAB_OUTPUT_DIRECTORY`, the directory where the script generated the aab bundle.
export BUNDLETOOL_INPUT="$PROJECT_DIR/deployments/aab/app.aab"
export BUNDLETOOL_OUTPUT="/deployments/apks/deployed-from-aab.apks"
```

Now we can run `bundletool` using the declared parameters.

> Note that we're using the same environment variables for the keystore requirements, if you moved to another terminal to test the `.aab` bundle this might not work until you declare again the environment variables. I recommend using the same terminal for both processes.

```bash
java -jar $BUNDLETOOL_PATH build-apks \
--bundle=$BUNDLETOOL_INPUT \
--output=$BUNDLETOOL_OUTPUT \
--ks=$KEYSTORE_FILE \
--ks-pass=pass:$KEYSTORE_PASS \
--ks-key-alias=$KEYSTORE_ALIAS \
--key-pass=pass:$KEYSTORE_ALIAS_PASSWORD
```

> This might take a while and outputs no information about the build. It uses all available cores to write the `.apks` file, which might weight 1GB or more.

**2.** Once the `bundletool` finishes, we're ready to test it in our phone.

First we need to get our device id using adb. We'll store it's value to an environment variable.

> Make sure you have enabled Android USB debugging mode in your phone.

```bash
export DEVICE_ID=`adb devices | tail +2 | cut -f1`
```

> Or you can just run `adb devices` and copy paste the output value to the following step.

Now we're read to use the `.apks` we generated with the `bundletool` into our mobile device.

```bash
java \
-jar $BUNDLETOOL_PATH \
install-apks \
--apks=$BUNDLETOOL_OUTPUT \
--device-id=$DEVICE_ID
```

The process should take less than a 30 seconds and you should discover there's a new application available in your applications box.
