const express = require("express");
const bodyParser = require('body-parser');
const routes = require("./routes/routes.js");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

var server = app.listen(port, () => {
    console.log(`Magic happens on port ${server.address().port}`);
});
