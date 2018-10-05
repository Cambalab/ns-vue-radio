# Nativescript Vue Radio

> A native white-label application built with NativeScript-Vue for community radios

## Download and Install

Download Command line tools from android:
- https://developer.android.com/studio/#downloads

Follow steps here:
- https://docs.nativescript.org/start/ns-setup-linux
- https://docs.nativescript.org/tooling/android-virtual-devices

## FCM Firebase Cloud Messaging
- https://github.com/EddyVerbruggen/nativescript-plugin-firebase/blob/master/docs/MESSAGING.md

Don't forget to copy your google-services.json to -> template/app/App_Resources/Android/ folder, follow steps here:
- https://gitlab.camba.coop/camba/radio-ahijuna-app/wikis/firebase-cloud-messaging

## Usage

``` bash
# Install dependencies
npm install

# Build for production
tns build <platform> --bundle

# Build for development
tns build <platform> --bundle --env.development

# Build, watch for changes and debug the application
tns debug <platform> --bundle

# Build, watch for changes and debug the application for development
tns debug <platform> --bundle --env.development

# Build, watch for changes and run the application
tns run <platform> --bundle

# Build, watch for changes and run the application for development
tns run <platform> --bundle --env.development
```

# Clean the NativeScript application instance (i.e. rm -rf dist)
npm run clean
```

> When invoking the various npm scripts, omitting the platform will attempt to launch `tns` for both platforms, which will only work in a properly configured OSX environment.

For detailed instructions, see https://github.com/nativescript-vue/vue-cli-template
