"use strict";

const controller = require("../controller/Cliente");

module.exports = (app) => {
    app.get("/api/clientes/:id", controller.get);
    app.get("/api/clientes", controller.get);
    // app.post("/api/clientes", controller.post);
    // app.delete("/api/clientes/:id", controller.delete);
    // app.put("/api/clientes/:id", controller.put);
};
