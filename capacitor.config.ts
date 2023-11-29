import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'cordova-iab-6-example',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  includePlugins: [
    'cordova-plugin-inappbrowser'
  ]
};

export default config;
