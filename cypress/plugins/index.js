var path = require('path')
var rootDir = path.dirname(__dirname)


// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// cypress/plugins/index.js
module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, args) => {
    browser = 'chrome'
    console.log(browser, args) // see what all is in here!
    
    // browser will look something like this
    // {
    //   name: 'chrome',
    //   displayName: 'Chrome',
    //   version: '63.0.3239.108',
    //   path: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    //   majorVersion: '63'
    // }

    // args are different based on the browser
    // sometimes an array, sometimes an object

    if (browser.name === 'chrome') {
      //Add extensions to chrome
      args.push(`--load-extension=${rootdir}/extensions/qr-extension.nex`)
      args.push('--account-consistency')
      args.push('--auth-ext-path')
      // whatever you return here becomes the new args
      return args
    }
  })
}
