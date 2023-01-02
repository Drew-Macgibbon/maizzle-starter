module.exports = {
  // The "before" hook is run before the template is compiled
  before: ($, meta) => {
    // Find all Liquid "if" statements
    console.log('running if.js transformer')
    $('[class*="if"]').each((i, el) => {
      // Convert the Liquid "if" statement to an MJML "mj-if" tag
      $(el).replaceWith(
        `<mj-if condition="${$(el).attr("conditional")}">${$(
          el
        ).html()}</mj-if>`
      );
    });
  },
}
