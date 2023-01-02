import { registerDependencies } from "mjml-validator";
import { BodyComponent } from "mjml-core";

registerDependencies({
  // Tell the validator which tags are allowed as our component's parent
  tr: ["mj-logo"],
  // Tell the validator which tags are allowed as our component's children
  "mj-logo": [],
});

export default class MjBasicComponent extends BodyComponent {
  static endingTag = true;

  static allowedAttributes = {
    color: "color",
  };

  static defaultAttributes = {
    color: "black",
  };

  getStyles() {
    return {
      contentSpan: {
        color: this.getAttribute("color"),
      },
    };
  }

  render() {
    return `
      <div>
        <p>
          <span
            ${this.htmlAttributes({
              style: "contentSpan",
            })}
          >
            ${this.getContent()}
          </span>
          <span>★</span>
        </p>
      </div>
		`;
  }
}
