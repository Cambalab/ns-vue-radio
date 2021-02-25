import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'coop.radio.app',
  appPath: 'app',
  appResourcesPath: 'app/App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
  },
} as NativeScriptConfig
