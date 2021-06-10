var path = require("path");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/html/home.html"));
  });
  app.get("/calendar", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/html/calendar.html"));
  });
};
