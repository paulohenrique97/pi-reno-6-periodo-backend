"use strict";

const controller = require("../controller/Vendedor");

module.exports = (app) => {
    app.get("/api/vendedores/:id", controller.get);
    app.get("/api/vendedores", controller.get);
    // app.post("/api/vendedores", controller.post);
    // app.delete("/api/vendedores/:id", controller.delete);
    // app.put("/api/vendedores/:id", controller.put);
};
