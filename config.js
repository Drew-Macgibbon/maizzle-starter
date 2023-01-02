/*
|-------------------------------------------------------------------------------
| Development config                      https://maizzle.com/docs/environments
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run `maizzle build` or `maizzle serve` and it has
| the fastest build time, since most transformations are disabled.
|
*/
const testData = require('./src/data/fake.json')

module.exports = {
  build: {
    templates: {
      source: 'src/templates',
      destination: {
        path: 'build_dev'
      },
      assets: {
        source: 'src/images',
        destination: 'images'
      },
    },
  },
  locals: testData,
  company: {
    name: 'Testing Company name',
    socials: {
      facebook:   'https://www.facebook.com/yumeibrand/',
      instagram: 'https://www.instagram.com/yumeibrand/',
    },
    links: {
      contact: 'https://yumeibrand.com/contact',
      care: 'https://yumeibrand.com/general-care',
      buyback: 'https://yumeibrand.com/buyback',
      lounges: 'https://yumeibrand.com/yu-mei-lounges',
    }
  }
}
