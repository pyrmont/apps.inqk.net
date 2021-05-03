# apps.inqk.net

This is the website at apps.inqk.net. It is intended to be updated using
[Tenter][rg].

[rg]: https://rubygems.org/gems/tenter/

Tailwind is used to generate the CSS. To create the CSS for use in
production, run:

    NODE_ENV=production npx tailwindcss-cli@latest build -o public/assets/css/style.css -c tailwind.config.js
