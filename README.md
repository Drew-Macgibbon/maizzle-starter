
### Stack

- [Maizzle](https://maizzle.com/docs/introduction) | create custom email templates using Tailwind and regular HTML
  - Browsersync | listing a directory of emails in browser
- [Liquid](https://shopify.dev/api/liquid) | for Shopify compatability


### Getting Started

```bash
yarn install
```

build development server

```
yarn dev
<!-- update config.js to match the production file you're working on -->
```

Build emails for production:

```
yarn build:<config_name>
<!-- 
  eg. yarn build:shopify
  update scripts when a new project is added
 -->
```

### Todo

- [ ] house multiple projects emails, use seperate config file & dynamic/seperated components
- [ ] refactor tailwind reusable components, set utilities
- [ ] create tailwind configs for each project
- [ ] convert HTML to Liquid progromatically
- [ ] validate Liquid code using ``liquidjs`` (maybe)

### FYI:

- for liquid support in vsCode add "emmet.includeLanguages": { "liquid": "html" } to your settings
- most Maizzle elements, eg. `<component></component>` do not allow self-closing
- rebuild if you change ``test.json`` or config files
- folders in  ``src/templates`` breaks asset imports (and likely other stuff)
- ``@{{ name | fallback: 'friend' }}`` for passing ignored variables to components.
- only able to get escaped variables working (``@{{ name | fallback: 'friend' }}``) within the ``<raw>`` element of **components**

If you've never coded emails before, [read this](https://explore.reallygoodemails.com/new-to-email-coding-heres-where-to-start-2494422f0bd4)

### Email Checking

If you're unsure about HTML or CSS validity you can check [here](https://www.caniemail.com/) 

We need to evaluate and add the best to workflow

- https://www.mail-tester.com/
- https://www.emailonacid.com/
- https://litmus.com/
- https://alter.email/
- https://putsmail.com/tests/new

