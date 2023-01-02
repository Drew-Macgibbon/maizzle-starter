## Need to know

When it comes to HTML emails, there are a few things that you should avoid doing. Here are some of them:

- do not use external CSS files and do not define your CSS styles in the email HTML HEAD section. Use inline CSS;
- avoid using background images, as they usually get ignored;
- avoid designing critical parts of your HTML email as images. Since images are heavily used by many email campaign providers to generate various email delivery reports, most modern email clients choose to ignore images by default;
- do not design your HTML email using DIVs. Instead, create your layout using tables;
- do not try to nest forms / actions / javascript in HTML emails. Not only that they will not work, but it’s likely to increase the spam score of your outgoing email;
- do not use videos or Flash files inside your HTML email. They get ignored by most email clients;
- use clean, W3C validated HTML code.

Read more: how to insert clean HTML code to Outlook emails.


Before you finalize a design, make sure to test it in all major email clients. You can use Litmus to do that.

[markup validation service](https://validator.w3.org/)