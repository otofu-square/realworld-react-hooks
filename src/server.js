const express = require("express");
const i18next = require("i18next");
const LanguageDetector = require("i18next-browser-languagedetector");
const { initReactI18next } = require("react-i18next");
const middleware = require("i18next-express-middleware");
const next = require("next");

i18next.use(middleware.LanguageDetector).init({
  preload: ["en", "de", "it"]
});

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const main = async () => {
  try {
    await app.prepare();
    const server = express();

    server.use(
      middleware.handle(i18next, {
        removeLngFromUrl: true
      })
    );

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  } catch (e) {
    console.error(e.stack);
    process.exit(1);
  }
};

main();
