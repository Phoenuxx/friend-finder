var path = require("path");






app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

app.get("/suvery", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});