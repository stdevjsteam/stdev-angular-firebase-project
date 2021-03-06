// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDSKbPou5hS59wqYORbwjnM5rFCj5G31co",
    authDomain: "stdevprojects.firebaseapp.com",
    databaseURL: "https://stdevprojects.firebaseio.com",
    projectId: "stdevprojects",
    storageBucket: "stdevprojects.appspot.com",
    messagingSenderId: "990758153807",
    appId: "1:990758153807:web:16492426e4e4b5b4"
  },
  homeComponent: 'Projects',
  codeExampleComponent: 'Code-Example',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
