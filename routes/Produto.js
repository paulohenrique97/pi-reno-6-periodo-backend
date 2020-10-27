"use strict";

const controller = require("../controller/Produto");

module.exports = (app) => {
    app.get("/api/produtos/:id", controller.get);
    app.get("/api/produtos", controller.get);
    // app.post("/api/produtos", controller.post);
    // app.delete("/api/produtos/:id", controller.delete);
    // app.put("/api/produtos/:id", controller.put);
};
