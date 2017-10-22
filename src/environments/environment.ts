// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyADBog97893qCHzxdcTZdyS4kUo_T413Gs',
    authDomain: 'jt92-firebasedemo.firebaseapp.com',
    databaseURL: 'https://jt92-firebasedemo.firebaseio.com',
    projectId: 'jt92-firebasedemo',
    storageBucket: 'jt92-firebasedemo.appspot.com',
    messagingSenderId: '283975765916'
  }
};
