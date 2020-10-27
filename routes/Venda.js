"use strict";

const controller = require("../controller/Venda");

module.exports = (app) => {
    app.get("/api/vendas/:id", controller.get);
    app.get("/api/vendas", controller.get);
    // app.post("/api/vendas", controller.post);
    // app.delete("/api/vendas/:id", controller.delete);
    // app.put("/api/vendas/:id", controller.put);
};
