var express = require('express');
var app = express();
const path = require('path')
var port = 8080; 

require("./routes/auth")(app, path);
require("./routes/server")(app, path);
require("./routes/css")(app, path);
require("./routes/js")(app, path);


app.listen(port, () => console.info(`[DEMO] Listening on port ${port}`));