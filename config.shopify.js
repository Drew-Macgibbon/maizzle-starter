const testData = require('./src/data/fake.json')

module.exports = {
  build: {
    templates: {
      source: "src/templates",
      destination: {
        path: "build_shopify",
      },
    },
  },
  filters: {
    // https://maizzle.com/docs/filters
    if: str => console.log('if found' + str)
  },
  transformers: [
    require('./src/transformer/ifs'),
  ],
  locals: testData,
};
