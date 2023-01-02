const { Liquid } = require('liquidjs');

const engine = new Liquid({
    root: './src/templates/*',
    extname: '.html',
    cache: true,
});

const src = "<h2>Welcome to {{ name | capitalize}}</h2>";

engine.parseAndRender().then((output) => {
  console.log(output); // Output: "Hello, {{ name }}"
});
