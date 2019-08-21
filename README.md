# Nativescript Vue Radio

<img style="" src="/design/logo520x520.png" width="300"> <img style="" src="/design/screen_live.png" width="200">

<img style="" src="/design/screen_podcasts.png" width="200"> <img style="" src="/design/screen_social.png" width="200"> <img style="" src="/design/screen_write_us.png" width="200">

> A native white-label application built with NativeScript-Vue for community radios

## Download and Install

Download [Command line tools](https://developer.android.com/studio/#downloads) from android

Follow steps here:
- [NativeScript Advanced Setup: Linux](https://docs.nativescript.org/start/ns-setup-linux)
- [Setup Android Emulators](https://docs.nativescript.org/tooling/android-virtual-devices)

## Generate your radio application

With the [guide to generate your radio app](./docs/Guide-to-generate-your-radio-app.md)

## FCM Firebase Cloud Messaging
- [Enabling Firebase Cloud Messaging](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/blob/master/docs/MESSAGING.md)

Don't forget to copy your `google-services.json` to ->  `template/app/App_Resources/Android/` folder, follow steps here:
- [firebase conguration guide](./docs/Spanish/Firebase-configuration-guide_es.md)

"nativescript-plugin-firebase": "7.1.2",

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

# Build, watch for changes and run the application using json_data
tns run <platform> --bundle --env.jsondata
```

 - Instructions to debug using [VueDevtools](https://nativescript-vue.org/en/docs/getting-started/vue-devtools/)

# Clean the NativeScript application instance

> i.e. rm -rf platforms
```
npm run clean
```

For detailed instructions, see [vue-cli-template](https://github.com/nativescript-vue/vue-cli-template)

## License

This software is licensed under the [GNU GPLv3 License](LICENSE), and sponsored by [Cambá](https://www.camba.coop).
<img style="" src="/design/logo-telegram.jpg" width="35">
