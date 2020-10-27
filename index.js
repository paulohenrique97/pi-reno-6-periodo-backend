"use strict";

require("dotenv").config();

const app = require("./config/server"),
    routes = require("./routes");

try {
    app.listen(process.env.PORT, () => {
        routes(app);
    });
} catch (err) {
    console.log(err);
}
