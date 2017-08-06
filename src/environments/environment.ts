// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // Must export the config
  firebase: {
    apiKey: 'AIzaSyAOWmReKuXQgsXHHl1-DA9chonjpWLE6Yg',
    authDomain: 'arthuriusadmin.firebaseapp.com',
    databaseURL: 'https://arthuriusadmin.firebaseio.com',
    projectId: 'arthuriusadmin',
    storageBucket: 'arthuriusadmin.appspot.com',
    messagingSenderId: '1023246788596'
  }
};
